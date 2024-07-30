const hardhat = require('hardhat')
const { extendConfig } = require('hardhat/config')
const { TASK_NODE_GET_PROVIDER } = require('hardhat/builtin-tasks/task-names')

async function main() {
  const chainId = 84532

  const hardhatProvider = await hardhat.run(TASK_NODE_GET_PROVIDER, {
    chainId,
  })
  console.log('hardhatProvider', hardhatProvider);

  const txHash = '0xe565eb3bfd815efcc82bed1eef580117f9dc3d6896db42500572c8e789c5edd4'
  const traceResult = await hardhatProvider.send('debug_traceTransaction', [txHash])

  console.log(`Finished debug_traceTransaction for ${chainId}/${txHash} with ${traceResult.structLogs.length} structLogs`)

}


main().then(() => console.log('don')).catch(e => console.error(e))
