import { useMemo, useState, type PropsWithChildren } from 'react'
import { WorksheetBuilderContext } from '../hooks/useWorksheetBuilderContext'
import type { WorksheetBuilder } from '../models/worksheetBuilder'
import type { Problem } from '../models/problems'

export default function WorksheetBuilderProvider({
  children,
  initProblems, // 문제 리스트 초기값
}: PropsWithChildren<{ initProblems: Problem[] }>) {
  const [worksheetProblemList, setWorksheetProblemList] =
    useState<Problem[]>(initProblems)
  // 선택된 문제의 아이디
  const [selectedProblemId, setSelectedProblemId] = useState<number | null>(
    null,
  )

  const worksheetValue = useMemo<WorksheetBuilder>(
    () => ({
      worksheetProblemList,
      setWorksheetProblemList,
      selectedProblemId,
      setSelectedProblemId,
    }),
    [
      worksheetProblemList,
      setWorksheetProblemList,
      selectedProblemId,
      setSelectedProblemId,
    ],
  )

  return (
    <WorksheetBuilderContext.Provider value={worksheetValue}>
      {children}
    </WorksheetBuilderContext.Provider>
  )
}
