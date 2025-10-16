import config from '@/config'
import axios, { type AxiosRequestConfig } from 'axios'

export const axiosInstance = axios.create({
  baseURL: config.baseUrl,
  withCredentials: true,
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

let isRefreshing = false

let pendingQueue: {
  resolve: (value: unknown) => void
  reject: (value: unknown) => void
}[] = []

const processQueue = (error: unknown) => {
  pendingQueue.forEach((promise) => {
    if (error) {
      promise.reject(error)
    } else {
      promise.resolve(null)
    }
  })

  pendingQueue = []
}

// A response interceptor is a function that catches EVERY response from your API calls before they reach your original code. It can modify responses, handle errors, or retry requests.
// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // SUCCESS HANDLER - for 200, 201, 204, etc.
    return response
  },
  async (error) => {
    // ERROR HANDLER - for 400, 401, 500, network errors, etc.
    // console.log("Request failed", error.response.data.message);

    const originalRequest = error.config as AxiosRequestConfig & {
      _retry: boolean
    }

    if (
      error.response.status === 500 &&
      error.response.data.message === 'jwt expired' &&
      !originalRequest._retry
    ) {
      console.log('Your token is expired')

      originalRequest._retry = true

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          pendingQueue.push({ resolve, reject })
        })
          .then(() => axiosInstance(originalRequest))
          .catch((error) => Promise.reject(error))
      }

      isRefreshing = true
      try {
        const res = await axiosInstance.post('/auth/refresh-token')
        console.log('New Token arrived', res)

        processQueue(null)

        return axiosInstance(originalRequest)
      } catch (error) {
        processQueue(error)
        return Promise.reject(error)
      } finally {
        isRefreshing = false
      }
    }

    //* For Everything
    return Promise.reject(error)
  }
)
