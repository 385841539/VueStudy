import axios from "axios";
import Vue from "vue";
//导入
import NProgress from 'nprogress'



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
    return config

})
Vue.prototype.$http = axios