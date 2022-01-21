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




Vue.config.productionTip = false
Vue.use(less)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
