await Bun.build({
  entrypoints: [
    './src/dune.ts',
    './src/checkWithdrawal.ts',
    './src/monitBalancer.ts',
    './src/callBalancer.ts',
  ],
  outdir: './out',
  target: 'bun',
  // minify: true,
})
