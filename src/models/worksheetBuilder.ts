import type { Problem } from './problems'

interface WorksheetBuilder {
  worksheetProblemList: Problem[] // 학습지에 포함된 문제 목록
  selectedProblemId: number | null // 선택된 문제의 아이디
  setSelectedProblemId: (problemId: number | null) => void // 선택된 문제의 아이디를 설정하는 함수
}

export type { WorksheetBuilder }
