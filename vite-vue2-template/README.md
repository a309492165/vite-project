提供了 vite + vue2 + vue-router + vuex + axios + ant-design-vue 的简单项目模板
开箱即用


**重点问题：ant-design-vue打包后产生 require('mutationobserver-shim')报错阻塞页面**
>> 解决方案：在 vite.config.js 中 plugins 进行配置
> 下载： npm i vite-plugin-import -D
```js
import createImportPlugin from 'vite-plugin-import'
plugins: [
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
]
```