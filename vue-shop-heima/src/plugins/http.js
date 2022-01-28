import axios from "axios";
import Vue from "vue";
//导入
import NProgress from 'nprogress'

import router from '../router/index'


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


// axios.defaults.baseURL = "http://" + host + "/api/privata/v1/"
axios.defaults.baseURL = "https://lianghj.top:8888/api/private/v1/"
axios.interceptors.request.use(config => {

    NProgress.start()


    var token = localStorage.getItem("token")
    // if (token) {
    config.headers.Authorization = token
    // }
    console.log("config---")
    console.log(config)
    return config

})

axios.interceptors.response.use(config => {
    NProgress.done()

    try {

        if (config.status == 404 || config.data.meta.status == 400 || config.data.meta.status == 404) {
            ///token失效重新登录
            console.log("config---111-")

            console.log(router)
            localStorage.clear();     //删除用户信息

            router.push('/login')


        }
    } catch (e) {


    }

    console.log("config----")
    console.log(config)
    return config

})
Vue.prototype.$http = axios