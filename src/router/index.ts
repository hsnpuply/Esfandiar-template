import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from '@/modules/auth/routes'
import dashboardRoutes from '@/modules/dashboard/routes'
import { useAuthStore } from '@/store/modules/auth.store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    ...authRoutes,
    ...dashboardRoutes,
  ]
})

router.beforeEach((to, from, next) => {
  // Temporarily disabling auth guards as requested
  /*
  const authStore = useAuthStore()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !authStore.isAuthenticated) {
    next('/auth/login')
  } else if (!requiresAuth && authStore.isAuthenticated && to.path.startsWith('/auth')) {
    next('/dashboard')
  } else {
    next()
  }
  */
  
  next()
})

export default router
