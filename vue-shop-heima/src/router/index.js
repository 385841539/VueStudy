import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import Rights from '../components/power/Rights.vue'
import Role from '../components/power/Role.vue'

//导入
import NProgress from 'nprogress'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [

      {
        path: "/welcome",
        component: Welcome

      },
      {
        path: "/users",

        component: Users

      }, {
        path: "/rights",

        component: Rights

      }, {
        path: "/roles",

        component: Role

      }

    ]
  }

]

const router = new VueRouter({
  routes
})





// 路由导航首位
router.beforeEach((to, from, next) => {
  // NProgress.start()


  if (to.path === '/login') return next()
  var token = localStorage.getItem("token");
  console.log(token)
  console.log(to.path)
  console.log("-----111-")


  if (token) {
    console.log("------")
    next()
  } else {
    return next("/login");
  }

})

router.afterEach(() => {
  // NProgress.done()
})


export default router
