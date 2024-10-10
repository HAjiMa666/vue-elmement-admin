import { createRouter, createWebHistory } from 'vue-router'
import { House, Files } from '@element-plus/icons-vue'
import HomeView from '../views/HomeView.vue'

const routers = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: '首页',
    icon: House,
    component: HomeView
  },
  {
    path: '/about',
    name: '常用组件',
    icon: Files,
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routers
})
export default router
export { routers }
