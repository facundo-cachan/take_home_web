import axios from 'axios'

import type {
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

type Interceptor = {
  request: AxiosInterceptorManager<InternalAxiosRequestConfig<unknown>>
  response: AxiosInterceptorManager<AxiosResponse<unknown>>
}

export const apiInstance: AxiosInstance = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
})
const { interceptors }: { interceptors: Interceptor } = apiInstance

interceptors.request.use(async (config: InternalAxiosRequestConfig<unknown>) => config)

interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: unknown) => {
    return Promise.reject(error)
  }
)
