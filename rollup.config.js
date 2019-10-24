export default [
    // browser-friendly UMD build
    {
        input: 'dist/index.js',
        output: {
            name: 'ng.autosize',
            file: "dist/bundles/autosize.umd.js",
            sourceMap: false,
            format: 'umd',
            globals: {
                '@angular/core': 'ng.core'
            }
        }
    }
]