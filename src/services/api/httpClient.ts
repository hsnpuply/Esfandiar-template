import axios from 'axios'
import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { useAuthStore } from '@/store/modules/auth.store'

export const httpClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request Interceptor
httpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const authStore = useAuthStore()
    if (authStore.token && config.headers) {
      config.headers.Authorization = `Bearer ${authStore.token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response Interceptor
httpClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const originalRequest = error.config
    
    // Pseudo code for refresh token handling
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      /* 
      try {
        const authStore = useAuthStore()
        const res = await axios.post('/api/auth/refresh', { token: authStore.refreshToken })
        authStore.login(res.data.token, res.data.user)
        originalRequest.headers.Authorization = `Bearer ${res.data.token}`
        return httpClient(originalRequest)
      } catch (refreshError) {
        useAuthStore().logout()
        return Promise.reject(refreshError)
      }
      */
    }
    return Promise.reject(error)
  }
)
