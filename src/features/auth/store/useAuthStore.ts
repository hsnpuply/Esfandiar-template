import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null);

  const isAuthenticated = computed(() => Boolean(token.value));

  function login(fakeToken = 'starter-token'): void {
    token.value = fakeToken;
  }

  function logout(): void {
    token.value = null;
  }

  return { token, isAuthenticated, login, logout };
});
