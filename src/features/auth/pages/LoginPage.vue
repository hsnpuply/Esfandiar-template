<script setup lang="ts">
import Button from 'primevue/button';
import Card from 'primevue/card';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/features/auth/store/useAuthStore';

const router = useRouter();
const authStore = useAuthStore();

function signIn(): void {
  authStore.login();
  router.push({ name: 'dashboard' });
}
</script>

<template>
  <div class="mx-auto mt-24 max-w-md">
    <Card>
      <template #title>Starter Login</template>
      <template #content>
        <p class="mb-4 text-surface-600">Temporary auth page for the starter-kit workflow.</p>
        <Button label="Login" icon="pi pi-sign-in" fluid @click="signIn" />
      </template>
    </Card>
  </div>
</template>
