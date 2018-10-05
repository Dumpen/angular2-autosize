export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/autosize.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.autosize',
  globals: {
    '@angular/core': 'ng.core'
  }
}