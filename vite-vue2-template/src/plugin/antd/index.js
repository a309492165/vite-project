import Vue from 'vue'

import { Button, message } from 'ant-design-vue' // 按需引入
import 'ant-design-vue/dist/antd.css' // or 'ant-design-vue/dist/antd.less'

// 挂载全局Message
Vue.prototype.$message = message

Vue.use(Button)
