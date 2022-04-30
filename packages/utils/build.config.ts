import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: ['src/'],
  outDir: 'lib',
  externals: ['@vueuse/core'],
})
