<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <main class="min-h-screen bg-surface-50 p-6 text-surface-900">
    <section class="mx-auto w-full max-w-6xl">
      <RouterView />
    </section>
  </main>
</template>
