import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import StarterLayout from '@/app/layouts/StarterLayout.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: StarterLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/features/dashboard/pages/DashboardPage.vue'),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('@/features/auth/pages/LoginPage.vue')
    }
  ]
});

router.beforeEach((to) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: 'login' };
  }

  if (to.name === 'login' && authStore.isAuthenticated) {
    return { name: 'dashboard' };
  }

  return true;
});

export default router;
