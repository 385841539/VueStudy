import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import less from 'less'
import './assets/css/global.css'
import './plugins/element'
//导入字体图标
import './assets/fonts/iconfont.css'

import axios from 'axios'


//获取域名
var host = window.location.host;
var host2 = document.domain;

//获取页面完整地址
var url = window.location.href;


console.log("url")
console.log(url)
console.log("host")
console.log(host)
console.log("host2")
console.log(host2)

axios.defaults.baseURL = "http://" + host + "/api/privata/v1/"
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(less)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
