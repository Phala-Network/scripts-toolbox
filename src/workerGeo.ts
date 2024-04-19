import {Parser} from '@json2csv/plainjs'
import {Reader} from '@maxmind/geoip2-node'
import wretch from 'wretch'
import {getSdk} from './gql/computation'
import {type Chain, assertNotNull, computationClient, logger} from './utils'

function getRandomCoordinate({
  latitude,
  longitude,
}: {
  latitude: number
  longitude: number
}) {
  const accuracyRadius = 50000
  const earthRadius = 6371000

  const randomAngle = Math.random() * 2 * Math.PI
  const randomRadius = Math.random() * accuracyRadius

  const newLatitude =
    latitude +
    (randomRadius / earthRadius) * (180 / Math.PI) * Math.sin(randomAngle)
  const newLongitude =
    longitude +
    ((randomRadius / earthRadius) * (180 / Math.PI) * Math.cos(randomAngle)) /
      Math.cos((latitude * Math.PI) / 180)

  return {
    latitude: Number.parseFloat(newLatitude.toFixed(4)),
    longitude: Number.parseFloat(newLongitude.toFixed(4)),
  }
}

const DEPINSCAN_UID = assertNotNull(Bun.env.DEPINSCAN_UID)
const DEPINSCAN_API_KEY = assertNotNull(Bun.env.DEPINSCAN_API_KEY)
const depinscan = wretch('https://api.depinscan.io/api').headers({
  authorization: DEPINSCAN_API_KEY,
})

interface Worker {
  id: string
  pubkey: string
  chain: Chain
  ip: string
  city?: string
  accuracyRadius?: number
  latitude?: number
  longitude?: number
}

const fetchOnlineWorkers = async (chain: Chain): Promise<Set<string>> => {
  const sdk = getSdk(computationClient[chain])
  const data = await sdk.OnlineWorkers()
  return new Set(data.workersConnection.edges.map((edge) => edge.node.id))
}

const process = async () => {
  const reader = await Reader.open('./out/GeoLite2-City.mmdb')
  const result = new Map<string, Worker>()

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
      const {city, location} = reader.city(ip)
      const worker: Worker = {
        id: `${chain}-${pubkey}`,
        pubkey,
        chain,
        ip,
        city: city?.names.en,
        accuracyRadius: location?.accuracyRadius,
        ...getRandomCoordinate({
          latitude: assertNotNull(location?.latitude),
          longitude: assertNotNull(location?.longitude),
        }),
      }
      result.set(worker.id, worker)
    }
  }

  await processWorkers('phala', './out/phala.ips')
  await processWorkers('khala', './out/khala.ips')

  const arr = Array.from(result.values())

  const depinscanEvents = arr.map((worker) => ({
    custom: {
      latitude: worker.latitude,
      longitude: worker.longitude,
    },
    publisher: worker.id,
  }))

  const grafanaData = arr.map((worker) => ({
    chain: worker.chain,
    latitude: worker.latitude,
    longitude: worker.longitude,
  }))

  logger.info(
    await depinscan
      .url('/upload-device-metrics')
      .post({uid: DEPINSCAN_UID, events: depinscanEvents})
      .text(),
  )

  await Bun.write(
    './out/grafana_worker_geo.csv',
    new Parser().parse(grafanaData),
  )
  await Bun.write(
    './out/depinscan_worker_geo.json',
    JSON.stringify(depinscanEvents, null, 2),
  )
  await Bun.write(
    './out/depinscan_worker_geo.csv',
    new Parser().parse(depinscanEvents),
  )
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

await process()
// await deleteDepinscanDevices()
