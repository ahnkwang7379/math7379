import { apiClient } from './apiClient'
import type { ProblemList } from '../models/problems'

export const ProblemsService = {
  getProblems: async (): Promise<ProblemList> => {
    const response = await apiClient.get<ProblemList>('/problems')
    return response
  },
  getSimilarityProblems: async (
    problemId: number,
    excludeProblemIds: number[],
  ) => {
    const response = await apiClient.get(`/problems/${problemId}/similarity`, {
      excludeProblemIds,
    })
    return response
  },
}
