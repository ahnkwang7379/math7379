export type ProblemLevel = 1 | 2 | 3 | 4 | 5
export type ProblemType = 1 | 2

export interface Problem {
  id: number // 문제 고유의 아이디
  level: ProblemLevel // 문제의 난이도 1,2,3,4,5 (1:하, 2:중하, 3:중, 4:상, 5:최상)
  type: ProblemType // 1,2 (1: 객관식, 2: 주관식)
  problemImageUrl: string // 문제 이미지 경로
  title: string // 문제 제목
  answerRate: number // 정답률
}

export type ProblemList = Problem[]
