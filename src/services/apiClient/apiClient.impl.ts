import type { IApiClient } from './apiClient'

const BASE_URL = '/api'

class ApiClient implements IApiClient {
  private baseUrl: string

  constructor() {
    this.baseUrl = BASE_URL
  }

  private getHeaders() {
    // 인증 필요한거 있으면 이쪽에 추가하기
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  }

  private getQueryArray(query?: object) {
    if (query === undefined) {
      return []
    }

    return Object.entries(query).map(([key, value]) => {
      if (Array.isArray(value))
        return value.map((v) => `${key}=${encodeURIComponent(v)}`).join('&')
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    })
  }

  private async api<T>(
    url: string,
    option: RequestInit & {
      params?: object
    },
  ) {
    const { params, ...options } = option
    const queryString =
      this.getQueryArray(params).length > 0
        ? `?${this.getQueryArray(params).join('&')}`
        : ''

    const res = await fetch(`${this.baseUrl}${url}${queryString}`, options)

    if (!res.ok) {
      return res.json().then((json) => Promise.reject(json))
    }

    return res.json() as Promise<T>
  }

  get<T>(url: string, queries?: object): Promise<T> {
    return this.api<T>(url, {
      method: 'GET',
      headers: this.getHeaders(),
      params: queries,
    })
  }

  post<T>(url: string, data?: object, params?: object): Promise<T> {
    return this.api<T>(url, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
      params: { ...params },
    })
  }
}

export default ApiClient
