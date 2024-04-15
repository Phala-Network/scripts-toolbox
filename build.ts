await Bun.build({
  entrypoints: ['./src/dune.ts', './src/checkWithdrawal.ts'],
  outdir: './out',
  target: 'bun',
})
