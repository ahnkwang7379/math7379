import { useState } from 'react'
import sleep from '../utils/sleep'

type FetchState = 'idle' | 'pending' | 'success' | 'error'

interface UseApiHandlerOptions<T> {
  onSuccess?: (data: T) => void
  onError?: (error: Error) => void
}

/**
 * @description
 * 데이터를 가져오는 함수를 실행하고, 상태를 관리하는 훅
 * @param fetchFn - 데이터를 가져오는 함수
 * @param options - 옵션
 * @returns {{
 *  execute: (params?: Params) => Promise<T>,
 *  data: T | null,
 *  error: Error | null,
 *  status: FetchState, // idle, pending, success, error
 *  isIdle: boolean, // 대기 상태
 *  isPending: boolean, // 로딩 중
 *  isSuccess: boolean, // 성공 여부
 *  isError: boolean // 에러 여부
 * }}
 */
function useApiHandler<T, Params = void>(
  fetchFn: (params: Params) => Promise<T>,
  options: UseApiHandlerOptions<T> = {},
) {
  const { onSuccess, onError } = options
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [status, setStatus] = useState<FetchState>('idle')

  const execute = async (params: Params) => {
    setStatus('pending')
    setError(null)

    try {
      // 로딩 테스트
      await sleep(3000)
      const response = await fetchFn(params as Params)
      setData(response || null)
      setStatus('success')
      if (response) {
        onSuccess?.(response)
      }
    } catch (err) {
      console.error(err)
      const errorObj = err instanceof Error ? err : new Error('에러 발생')
      setError(errorObj)
      onError?.(errorObj)
    }
  }

  const isIdle = status === 'idle'
  const isPending = status === 'pending'
  const isSuccess = status === 'success'
  const isError = status === 'error'

  return {
    execute,
    data,
    error,
    status,
    isIdle,
    isPending,
    isSuccess,
    isError,
  }
}

export default useApiHandler
