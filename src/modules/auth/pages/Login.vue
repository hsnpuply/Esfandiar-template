<script setup lang="ts">
import { Form, Field, ErrorMessage, useForm } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/modules/auth.store'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'

const router = useRouter()
const authStore = useAuthStore()

const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
})

const onSubmit = (values: Record<string, any>) => {
  // In a real app, call your auth.service.ts here
  console.log('Login values', values)
  
  // Fake login
  authStore.login('fake-jwt-token-12345', { id: 1, email: values.email })
  router.push('/dashboard')
}
</script>

<template>
  <div class="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
    <div class="text-center mb-8">
      <h2 class="text-2xl font-bold text-gray-900">Welcome Back</h2>
      <p class="text-gray-500 mt-2">Sign in to your account</p>
    </div>
    
    <Form :validation-schema="schema" @submit="onSubmit" class="space-y-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <Field name="email" v-slot="{ field, errors }">
          <BaseInput 
            v-bind="field" 
            type="email" 
            placeholder="you@example.com"
            :error="errors[0]"
          />
        </Field>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <Field name="password" v-slot="{ field, errors }">
          <BaseInput 
            v-bind="field" 
            type="password" 
            placeholder="••••••••"
            :error="errors[0]"
          />
        </Field>
      </div>

      <BaseButton type="submit" class="w-full">
        Sign In
      </BaseButton>
    </Form>
  </div>
</template>
