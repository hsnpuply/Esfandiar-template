<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
    <h3 v-if="title" class="text-lg font-medium text-gray-900 mb-4">{{ title }}</h3>
    <slot></slot>
  </div>
</template>
