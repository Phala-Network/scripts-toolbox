const address = Bun.env.ADDRESS ?? 'https://phala-rpc.dwellir.com'

void fetch(address, {
  method: 'POST',
  headers: {'content-type': 'application/json'},
  body: JSON.stringify({
    id: 1,
    jsonrpc: '2.0',
    method: 'state_getMetadata',
    params: [],
  }),
})
  .then(async (res) => await res.text())
  .then(async (data) => await Bun.write('./src/phala/metadata.json', data))
