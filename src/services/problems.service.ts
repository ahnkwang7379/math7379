import { apiClient } from './apiClient'
import type { ProblemList } from '../models/problems'
import sleep from '../utils/sleep'

/**
 * @description
 * 문제 관련 API 호출 서비스
 * loading placeholder 테스트와 UI 테스트를 위해 0.3초 딜레이 추가
 * 딜레이는 일부러 남겨두었습니다.
 */
export const ProblemsService = {
  getProblems: async (): Promise<ProblemList> => {
    await sleep(300)
    const response = await apiClient.get<ProblemList>('/problems')
    return response
  },
  getSimilarityProblems: async (
    problemId: number,
    excludedProblemIds: number[],
  ): Promise<ProblemList> => {
    await sleep(300)
    const response = await apiClient.get<ProblemList>(
      `/problems/${problemId}/similarity`,
      {
        excludedProblemIds,
      },
    )

    return response
  },
}
