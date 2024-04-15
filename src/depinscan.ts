interface Metrics {
  avg_device_cost?: number
  estimated_daily_earnings?: number
  total_devices: number
}

export async function main(): Promise<Metrics> {
  const fetchState = async (chain: 'phala' | 'khala'): Promise<Metrics> => {
    const data = await fetch(
      `https://subsquid.phala.network/${chain}-computation/graphql`,
      {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
          query: `{ globalStateById(id: "0") { idleWorkerCount } }`,
        }),
      },
    ).then((r) => r.json())
    return {total_devices: data.data.globalStateById.idleWorkerCount}
  }

  const phala = await fetchState('phala')
  const khala = await fetchState('khala')

  return {
    total_devices: phala.total_devices + khala.total_devices,
  }
}
