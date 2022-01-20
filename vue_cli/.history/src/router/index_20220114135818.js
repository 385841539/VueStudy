import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [

      {
        path: "/",
        name: "home",
        component: () => import('@/views/Home/Home')

      },
      {
        path: "/mall",
        name: "mall",
        component: () => import('@/views/Mall/Mall')

      },
      {
        path: "/user",
        name: "user",
        component: () => import('@/views/Mall/Mall')

      },
      {
        path: "/other",
        name: "other",
        component: () => import('@/views/Mall/Mall')

      },

    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
