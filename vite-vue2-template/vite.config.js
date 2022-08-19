import {defineConfig} from 'vite' // 动态配置函数
import {createVuePlugin} from 'vite-plugin-vue2'
import {resolve} from 'path'

import requireTransform from 'vite-plugin-require-transform'
import createImportPlugin from 'vite-plugin-import'


export default () => defineConfig({
    base: './',

    plugins: [
        createVuePlugin(),
        // 兼容 require() 引用资源
        requireTransform({
            fileRegex: /.ts$|.tsx$|.vue$/
        }),
        createImportPlugin({
            onlyBuild: false, // 是否只需要在生产环境中使用
            babelImportPluginOptions: [
                {
                    libraryName: 'ant-design-vue',
                    libraryDirectory: 'es',
                    style: 'css', // or 'css'
                },
            ],
        })
    ],
    server: {
        open: true, //自动打开浏览器
        port: 1567, //端口号
        proxy: { // 代理
            // 字符串简写写法
            '/foo': 'http://localhost:4567',
            // 选项写法
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
            // 正则表达式写法
            '^/fallback/.*': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/fallback/, '')
            }
        }
    },
    resolve: {
        // 别名
        alias: [
            {
                find: '@',
                replacement: resolve('src')
            }
        ]
    },
    css: {
        preprocessorOptions: {
            scss: {}
        }
    }
})