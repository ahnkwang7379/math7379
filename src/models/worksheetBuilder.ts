import type { Problem } from './problems'

interface WorksheetBuilder {
  worksheetProblemList: Problem[] // 학습지에 포함된 문제 목록
  selectedProblemId: number | null // 선택된 문제의 아이디
  similarityProblemList: Problem[] // 유사문항 목록
  setSimilarityProblemList: (problemList: Problem[]) => void // 유사문항 목록을 설정하는 함수
  getSimilarityProblemsAction: (problemId: number) => void // 유사문항 목록을 가져오는 함수
  isSimilarityProblemListPending: boolean // 유사문항 목록을 가져오는 중인지 여부
  isSimilarityProblemListSuccess: boolean // 유사문항 목록을 가져오는 성공 여부
  isSimilarityProblemListError: boolean // 유사문항 목록을 가져오는 에러 여부
  addProblemToWorksheet: (problemId: number) => void // 학습지에 문제를 추가하는 함수
  replaceProblemInWorksheet: (problemId: number) => void // 학습지에 문제를 교체하는 함수
  removeProblemFromWorksheet: (problemId: number) => void // 학습지에 문제를 삭제하는 함수
}

export type { WorksheetBuilder }
