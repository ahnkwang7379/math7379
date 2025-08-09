import type { ProblemLevel } from '../models/problems'
import type { ColorToken } from '../components/common/Typography/index.tsx'

const PROBLEM_LEVEL_MAP: Record<ProblemLevel, string> = {
  1: '하',
  2: '중하',
  3: '중',
  4: '상',
  5: '최상',
}

const PROBLEM_LEVEL_COLOR_MAP: Record<ProblemLevel, ColorToken> = {
  1: 'gray-800',
  2: 'blue-300',
  3: 'teal-500',
  4: 'yellow-500',
  5: 'red-500',
}

export const formatProblemLevel = (level: ProblemLevel) => {
  return PROBLEM_LEVEL_MAP[level]
}

export const formatProblemLevelColor = (level: ProblemLevel): ColorToken => {
  return PROBLEM_LEVEL_COLOR_MAP[level]
}
