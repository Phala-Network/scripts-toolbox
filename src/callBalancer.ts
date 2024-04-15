import {
  OnChainRegistry,
  PinkContractPromise,
  options,
  signCertificate,
} from '@phala/sdk'
import {ApiPromise, HttpProvider, Keyring} from '@polkadot/api'
import {waitReady} from '@polkadot/wasm-crypto'
import {CronJob} from 'cron'

const metadata =
  '{"source":{"hash":"0x1e7f2ec6f2297f167747454bb2654f5336a254fe454533d4555886a6021738be","language":"ink! 4.3.0","compiler":"rustc 1.79.0-nightly","build_info":{"build_mode":"Release","cargo_contract_version":"3.2.0","rust_toolchain":"nightly-aarch64-apple-darwin","wasm_opt_settings":{"keep_debug_symbols":false,"optimization_passes":"Z"}}},"contract":{"name":"budget_balancer","version":"0.1.0","authors":["kingsley"]},"spec":{"constructors":[{"args":[],"default":false,"docs":[],"label":"new","payable":false,"returnType":{"displayName":["ink_primitives","ConstructorResult"],"type":2},"selector":"0x9bae9d5e"}],"docs":[],"environment":{"accountId":{"displayName":["AccountId"],"type":12},"balance":{"displayName":["Balance"],"type":10},"blockNumber":{"displayName":["BlockNumber"],"type":16},"chainExtension":{"displayName":["ChainExtension"],"type":17},"hash":{"displayName":["Hash"],"type":14},"maxEventTopics":4,"timestamp":{"displayName":["Timestamp"],"type":15}},"events":[],"lang_error":{"displayName":["ink","LangError"],"type":4},"messages":[{"args":[],"default":false,"docs":[],"label":"get_executor_account","mutates":false,"payable":false,"returnType":{"displayName":["ink","MessageResult"],"type":5},"selector":"0xa0d3b7a4"},{"args":[],"default":false,"docs":[],"label":"update_budget","mutates":false,"payable":false,"returnType":{"displayName":["ink","MessageResult"],"type":7},"selector":"0xdef3ef7f"}]},"storage":{"root":{"layout":{"struct":{"fields":[{"layout":{"leaf":{"key":"0x00000000","ty":0}},"name":"executor_account"},{"layout":{"array":{"layout":{"leaf":{"key":"0x00000000","ty":1}},"len":32,"offset":"0x00000000"}},"name":"executor_private_key"}],"name":"BudgetBalancer"}},"root_key":"0x00000000"}},"types":[{"id":0,"type":{"def":{"sequence":{"type":1}}}},{"id":1,"type":{"def":{"primitive":"u8"}}},{"id":2,"type":{"def":{"variant":{"variants":[{"fields":[{"type":3}],"index":0,"name":"Ok"},{"fields":[{"type":4}],"index":1,"name":"Err"}]}},"params":[{"name":"T","type":3},{"name":"E","type":4}],"path":["Result"]}},{"id":3,"type":{"def":{"tuple":[]}}},{"id":4,"type":{"def":{"variant":{"variants":[{"index":1,"name":"CouldNotReadInput"}]}},"path":["ink_primitives","LangError"]}},{"id":5,"type":{"def":{"variant":{"variants":[{"fields":[{"type":6}],"index":0,"name":"Ok"},{"fields":[{"type":4}],"index":1,"name":"Err"}]}},"params":[{"name":"T","type":6},{"name":"E","type":4}],"path":["Result"]}},{"id":6,"type":{"def":{"primitive":"str"}}},{"id":7,"type":{"def":{"variant":{"variants":[{"fields":[{"type":8}],"index":0,"name":"Ok"},{"fields":[{"type":4}],"index":1,"name":"Err"}]}},"params":[{"name":"T","type":8},{"name":"E","type":4}],"path":["Result"]}},{"id":8,"type":{"def":{"variant":{"variants":[{"fields":[{"type":9}],"index":0,"name":"Ok"},{"fields":[{"type":11}],"index":1,"name":"Err"}]}},"params":[{"name":"T","type":9},{"name":"E","type":11}],"path":["Result"]}},{"id":9,"type":{"def":{"tuple":[10,10]}}},{"id":10,"type":{"def":{"primitive":"u128"}}},{"id":11,"type":{"def":{"variant":{"variants":[{"index":0,"name":"InvalidStorage"},{"index":1,"name":"RpcRequestFailed"},{"index":2,"name":"FetchTimestampFailed"},{"index":3,"name":"InvalidTimestamp"},{"index":4,"name":"FetchBlockFailed"},{"index":5,"name":"FetchSharesFailed"},{"index":6,"name":"SharesNotFound"},{"index":7,"name":"InvalidNonce"},{"index":8,"name":"CreateExtrinsicFailed"},{"index":9,"name":"SendExtrinsicFailed"}]}},"path":["budget_balancer","budget_balancer","Error"]}},{"id":12,"type":{"def":{"composite":{"fields":[{"type":13,"typeName":"[u8; 32]"}]}},"path":["ink_primitives","types","AccountId"]}},{"id":13,"type":{"def":{"array":{"len":32,"type":1}}}},{"id":14,"type":{"def":{"composite":{"fields":[{"type":13,"typeName":"[u8; 32]"}]}},"path":["ink_primitives","types","Hash"]}},{"id":15,"type":{"def":{"primitive":"u64"}}},{"id":16,"type":{"def":{"primitive":"u32"}}},{"id":17,"type":{"def":{"variant":{}},"path":["pink_extension","chain_extension","PinkExt"]}}],"version":"4"}'

const main = async (): Promise<void> => {
  await waitReady()
  const keyring = new Keyring({type: 'sr25519'})
  const pair = keyring.addFromUri('//Alice')
  const contractId =
    '0x71a477616dd2c635f4bc0afa09ae01733b107a66f35dff2036349da4cfb3baaf'
  const provider = new HttpProvider('https://phala-rpc.dwellir.com')
  const api = await ApiPromise.create(options({provider, noInitWarn: true}))
  const cert = await signCertificate({pair})
  const phatRegistry = await OnChainRegistry.create(api)
  const contractKey = await phatRegistry.getContractKeyOrFail(contractId)
  const contract = new PinkContractPromise(
    api,
    phatRegistry,
    metadata,
    contractId,
    contractKey,
  )

  try {
    const res = await contract.query.updateBudget(pair.address, {cert})
    console.log(res.output.asOk.toJSON())
  } catch (err) {
    console.error(err)
  }
}
const job = new CronJob(
  '* * * * *',
  () => {
    void main()
  },
  null,
  null,
  'utc',
)

job.start()

console.log('Started')
