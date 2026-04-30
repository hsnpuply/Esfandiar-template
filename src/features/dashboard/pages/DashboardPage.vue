<script setup lang="ts">
import Button from 'primevue/button';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import PersianDateShowcase from '@/features/dashboard/components/PersianDateShowcase.vue';

const authStore = useAuthStore();
</script>

<template>
  <div class="space-y-6">
    <header class="flex items-center justify-between rounded-xl border border-surface-200 bg-white p-4 shadow-sm">
      <h1 class="text-2xl font-bold">Feature-Based Vue Starter Kit</h1>
      <Button label="Logout" icon="pi pi-sign-out" severity="secondary" @click="authStore.logout" />
    </header>

    <PersianDateShowcase />
  </div>
</template>
