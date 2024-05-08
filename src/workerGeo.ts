import {Parser} from '@json2csv/plainjs'
import {Reader} from '@maxmind/geoip2-node'
import * as _ from 'radash'
import wretch from 'wretch'
import {getSdk} from './gql/computation'
import {assertNotNull} from './utils/assertNotNull'
import {computationClient} from './utils/gql'
import {logger} from './utils/logger'
import type {Chain} from './utils/phalaApi'

function getDistance(point1: Point, point2: Point) {
  const R = 6371 // Radius of the Earth in km

  const radLat1 = (point1.latitude * Math.PI) / 180
  const radLat2 = (point2.latitude * Math.PI) / 180
  const deltaLat = radLat2 - radLat1
  const deltaLon = ((point2.longitude - point1.longitude) * Math.PI) / 180

  // Haversine
  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(deltaLon / 2) ** 2
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c

  return distance
}

const DEPINSCAN_UID = assertNotNull(process.env.DEPINSCAN_UID)
const DEPINSCAN_API_KEY = assertNotNull(process.env.DEPINSCAN_API_KEY)
const depinscan = wretch('https://api.depinscan.io/api').headers({
  authorization: DEPINSCAN_API_KEY,
})

interface Point {
  latitude: number
  longitude: number
}

interface Worker extends Point {
  id: string
  pubkey: string
  chain: Chain
  ip: string
  country?: string
  city?: string
  accuracyRadius?: number
}

interface GrafanaData extends Point {
  phala: number
  khala: number
  country?: string
  city?: string
}

const fetchOnlineWorkers = async (chain: Chain): Promise<Set<string>> => {
  const sdk = getSdk(computationClient[chain])
  const data = await sdk.OnlineWorkers()
  return new Set(data.workersConnection.edges.map((edge) => edge.node.id))
}

const main = async () => {
  const reader = await Reader.open('./out/GeoLite2-City.mmdb')
  const workerMap = new Map<string, Worker>()

  const processWorkers = async (chain: Chain, path: string) => {
    const onlineWorkers = await fetchOnlineWorkers(chain)
    const data = await Bun.file(path).text()
    const lines = data.split('\n')
    for (const line of lines) {
      const [pubkeyWithoutPrefix, ip] = line.split('\t')
      const pubkey = `0x${pubkeyWithoutPrefix}`
      if (!pubkey || !ip || !onlineWorkers.has(pubkey)) {
        continue
      }
      const {city, location, country} = reader.city(ip)
      if (location == null) {
        logger.error(`Location not found for ${ip}`)
        continue
      }
      const worker: Worker = {
        id: `${chain}-${pubkey}`,
        pubkey,
        chain,
        ip,
        country: country?.names.en,
        city: city?.names.en,
        accuracyRadius: location.accuracyRadius,
        latitude: location.latitude,
        longitude: location.longitude,
      }
      workerMap.set(worker.id, worker)
    }
  }

  await processWorkers('phala', './out/phala.ips')
  await processWorkers('khala', './out/khala.ips')

  const workers = Array.from(workerMap.values())

  logger.info(`Total workers: ${workers.length}`)

  // const depinscanEvents = workers.map((worker) => ({
  //   custom: {
  //     latitude: worker.latitude,
  //     longitude: worker.longitude,
  //   },
  //   publisher: worker.id,
  // }))

  // logger.info(
  //   await depinscan
  //     .url('/upload-device-metrics')
  //     .post({uid: DEPINSCAN_UID, events: depinscanEvents})
  //     .text(),
  // )

  const grafanaData: GrafanaData[] = []

  for (const worker of workers) {
    let found = false
    for (const data of grafanaData) {
      const distance = getDistance(worker, data)
      if (distance < 50) {
        data[worker.chain] += 1
        found = true
        break
      }
    }

    if (!found) {
      grafanaData.push({
        latitude: worker.latitude,
        longitude: worker.longitude,
        phala: worker.chain === 'phala' ? 1 : 0,
        khala: worker.chain === 'khala' ? 1 : 0,
        country: worker.country,
        city: worker.city,
      })
    }
  }

  await Bun.write(
    './out/grafana_worker_geo.csv',
    new Parser().parse(grafanaData),
  )
  // await Bun.write(
  //   './out/depinscan_worker_geo.json',
  //   JSON.stringify(depinscanEvents, null, 2),
  // )
  // await Bun.write(
  //   './out/depinscan_worker_geo.csv',
  //   new Parser().parse(depinscanEvents),
  // )
}

const deleteDepinscanDevices = async () => {
  const data = await Bun.file('./out/depinscan_worker_geo.json').json()

  const publishers = data.map((event: {publisher: string}) => event.publisher)

  for (let i = 0; i < data.length; i += 2000) {
    logger.info(
      await depinscan
        .url('/delete-devices')
        .json({
          uid: DEPINSCAN_UID,
          publishers: publishers.slice(i, i + 2000),
        })
        .delete()
        .text(),
    )
  }
}

await main()
// await deleteDepinscanDevices()
