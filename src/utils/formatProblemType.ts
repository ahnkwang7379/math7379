import type { ProblemType } from '../models/problems'

const PROBLEM_TYPE_MAP: Record<ProblemType, string> = {
  1: '객관식',
  2: '주관식',
}

export const formatProblemType = (type: ProblemType) => {
  return PROBLEM_TYPE_MAP[type]
}
