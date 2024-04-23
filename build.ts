await Bun.build({
  entrypoints: [
    './src/dune.ts',
    './src/checkWithdrawal.ts',
    './src/monitBalancer.ts',
  ],
  outdir: './out',
  target: 'node',
})
