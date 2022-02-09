module.exports = {
    lintOnSave: false,
    devServer: {
        // proxy: {
        //     '/api': {
        //         // 测试环境
        //         target: 'https://lianghj.top:8888/api/private/v1/',  // 接口域名
        //         // target: 'http://10.178.110.30:8083/api/privata/v1/',  // 接口域名
        //         changeOrigin: true,  //是否跨域
        //         pathRewrite: {
        //             "^/api": '/'   //需要rewrite重写的,
        //         }
        //     }
        // }
    },
    chainWebpack: config => {


        config.when(process.env.NODE_ENV === 'production', config => {

            config.entry('app').clear().add('./src/main-prod.js')

            config.set('externals', {
                vue: 'Vue',
                'vue-router': 'VueRouter',
                axios: 'axios',
                lodash: '_',
                echarts: 'echarts',
                nprogress: 'NProgress',
                'vue-quill-editor': 'VueQuillEditor',
                jquery: '$'
            })
            config.plugin('html').tap(args => {
                args[0].isProd = true
                return args
            })


        })

        config.when(process.env.NODE_ENV === 'development', config => {

            config.entry('app').clear().add('./src/main-dev.js')

        })

    }



}