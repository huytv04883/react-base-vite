import axios, { AxiosResponse, isAxiosError } from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.BASE_CALL_API_URL,
  timeout: 1000
})

export const buildHeader = () => {
  const headers = {
    'content-Type': 'application/json; utf-8'
  }
  const token = '' // Todo: get token from localstorage or other
  if (token) {
    return { ...headers, Authorization: `Bearer ${token}` }
  }
  return headers
}

export const buildAuthHeader = () => {
  const headers = {
    'content-Type': 'application/json; utf-8'
  }
  return headers
}

export const request = {
  auth: async <T>(endpoint: string, body: object = {}) => {
    try {
      const res: AxiosResponse = await axiosInstance({
        method: 'POST',
        url: endpoint,
        headers: buildAuthHeader(),
        data: JSON.stringify({ ...body })
      })
      return new Promise((resolve) => resolve(res.data)) as T
    } catch (e) {
      if (isAxiosError(e)) {
        return e
      }
    }
  },
  get: async <T>(endpoint: string) => {
    try {
      const res: AxiosResponse = await axiosInstance({
        method: 'POST',
        url: endpoint,
        headers: buildAuthHeader()
      })
      return new Promise((resolve) => resolve(res.data)) as T
    } catch (e) {
      if (isAxiosError(e)) {
        return e
      }
    }
  },
  post: async <T>(endpoint: string, body: object = {}) => {
    try {
      const res: AxiosResponse = await axiosInstance({
        method: 'POST',
        url: endpoint,
        headers: buildHeader(),
        data: JSON.stringify({ ...body })
      })

      return new Promise((resolve) => resolve(res.data)) as T
    } catch (e) {
      if (isAxiosError(e)) {
        return e
      }
    }
  },
  put: async <T>(endpoint: string, body: object = {}) => {
    try {
      const res = await axiosInstance({
        method: 'PUT',
        url: endpoint,
        headers: buildHeader(),
        data: JSON.stringify({ ...body })
      })
      return new Promise((resolve) => resolve(res.data)) as T
    } catch (e) {
      if (isAxiosError(e)) {
        return e
      }
    }
  },
  delete: async <T>(endpoint: string) => {
    try {
      const res = await axiosInstance({
        method: 'DELETE',
        url: endpoint,
        headers: buildHeader()
      })
      return new Promise((resolve) => resolve(res.data)) as T
    } catch (e) {
      if (isAxiosError(e)) {
        return e
      }
    }
  }
}
