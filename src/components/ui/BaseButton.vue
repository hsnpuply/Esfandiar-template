<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
}>()

const btnClass = computed(() => {
  const base = 'px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
  }
  return `${base} ${variants[props.variant || 'primary']}`
})
</script>

<template>
  <button :type="type" :class="btnClass" :disabled="disabled">
    <slot></slot>
  </button>
</template>
