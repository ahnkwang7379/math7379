// get post 우선 두개만 선언
export interface IApiClient {
  get: <T>(url: string, queries?: object) => Promise<T>
  post: <T>(url: string, data?: object, params?: object) => Promise<T>
}
