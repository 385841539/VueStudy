import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import less from 'less'
import './assets/css/global.css'
import './plugins/element'
import './plugins/http'
//导入字体图标
import './assets/fonts/iconfont.css'

import 'nprogress/nprogress.css'


console.log('process.env.NODE_ENV')
console.log(process.env.NODE_ENV)


Vue.config.productionTip = false
Vue.use(less)

// Vue.filter('dateFormat',function(oriVal){


//   const dt=new Date(oriVal)

// const y=  dt.getUTCFullYear()

// })

//注册了两个时间格式化过滤器，一个格式化到天，一个格式化到秒
Vue.filter('dayFormat', function (dataStr, pattern = 'YYYY-MM-DD') {
  return moment(dataStr).format(pattern)
})
Vue.filter('minFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
