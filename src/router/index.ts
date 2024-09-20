import { useUserStore } from '@/stores'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue'),
      meta: { title: '登录' }
    },
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '/home',
          component: () => import('@/views/Home/index.vue'),
          meta: { title: '首页' }
        },
        {
          path: '/article',
          component: () => import('@/views/Article/index.vue'),
          meta: { title: '健康百科' }
        },
        {
          path: '/notify',
          component: () => import('@/views/Notify/index.vue'),
          meta: { title: '消息通知' }
        },
        {
          path: '/user',
          component: () => import('@/views/User/index.vue'),
          meta: { title: '个人中心' }
        }
      ],
      redirect: '/home'
    }
  ]
})

//全局前置导航守卫
router.beforeEach((to) => {
  // 获取token
  const store = useUserStore()
  // 白名单页面
  const whiteList = ['/login']
  // 如果访问的用户没有token且访问地址不在白名单中，重定向到登录页面
  if (!store.user?.token && !whiteList.includes(to.path)) return '/login'
})

// 全局后置守卫
router.afterEach((to) => {
  document.title = `${to.meta.title || ''}-优医问诊`
})

// console.log(import.meta)

export default router
