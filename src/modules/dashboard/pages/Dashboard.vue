<script setup lang="ts">
import { useAuthStore } from '@/store/modules/auth.store'
import BaseCard from '@/components/ui/BaseCard.vue'
import SalesChart from '@/components/ui/SalesChart.vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const logout = () => {
  authStore.logout()
  router.push('/auth/login')
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Overview</h2>
      <button @click="logout" class="text-sm bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200">
        Logout
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <BaseCard title="Total Users">
        <div class="text-3xl font-bold text-blue-600">1,234</div>
      </BaseCard>
      
      <BaseCard title="Revenue">
        <div class="text-3xl font-bold text-green-600">$45,678</div>
      </BaseCard>
      
      <BaseCard title="Active Sessions">
        <div class="text-3xl font-bold text-purple-600">89</div>
      </BaseCard>
    </div>

    <div class="grid grid-cols-1 gap-6">
      <BaseCard title="Sales Analytics">
        <SalesChart />
      </BaseCard>
    </div>
    
  </div>
</template>
