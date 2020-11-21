import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    components: {
      main: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue')
    }
  },
  {
    path: '/',
    name: 'Home',
    meta: { title: '主页' },
    components: {
      main: Home,
    },
    children: [
      // 子路由，子页面使用router-view
      {
        path: '/',
        name: 'Commodity',
        meta: { title: '商品管理' },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: {
          content: () => import(/* webpackChunkName: "about" */ '@/views/commodity/index.vue')
        }
      },
      {
        path: '/about',
        name: 'About',
        meta: { title: '关于' },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: {
          content: () => import(/* webpackChunkName: "about" */ '@/views/about/index.vue')
        }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
