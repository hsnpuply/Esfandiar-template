<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex h-screen bg-gray-50 text-gray-900">
    <aside class="w-64 bg-white border-r border-gray-200">
      <div class="h-16 flex items-center px-6 border-b border-gray-200 font-semibold text-lg">
        Enterprise App
      </div>
      <nav class="p-4 space-y-2">
        <router-link to="/dashboard" class="block px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
          Dashboard
        </router-link>
      </nav>
    </aside>
    
    <main class="flex-1 flex flex-col overflow-hidden">
      <header class="h-16 bg-white border-b border-gray-200 flex items-center px-6 justify-between">
        <h1 class="text-xl font-semibold">Dashboard</h1>
        <!-- User Menu could go here -->
      </header>
      <div class="flex-1 overflow-auto p-6">
        <RouterView />
      </div>
    </main>
  </div>
</template>
