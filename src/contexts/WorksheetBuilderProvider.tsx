import { useCallback, useMemo, useState, type PropsWithChildren } from 'react'
import { WorksheetBuilderContext } from '../hooks/useWorksheetBuilderContext'
import type { WorksheetBuilder } from '../models/worksheetBuilder'
import type { Problem } from '../models/problems'
import useApiHandler from '../hooks/useApiHandler'
import { ProblemsService } from '../services/problems.service'

interface WorksheetBuilderProviderProps {
  initProblems: Problem[]
}

export default function WorksheetBuilderProvider({
  children,
  initProblems,
}: PropsWithChildren<WorksheetBuilderProviderProps>) {
  // ===== STATE =====
  const [worksheetProblemList, setWorksheetProblemList] =
    useState<Problem[]>(initProblems)
  const [selectedProblemId, setSelectedProblemId] = useState<number | null>(
    null,
  )
  const [similarityProblemList, setSimilarityProblemList] = useState<Problem[]>(
    [],
  )

  // ===== API HANDLER =====
  const {
    execute: getSimilarityProblemList,
    reset: resetSimilarityProblemList,
    isPending: isSimilarityProblemListPending,
    isSuccess: isSimilarityProblemListSuccess,
    isError: isSimilarityProblemListError,
  } = useApiHandler(
    (params: { problemId: number; excludedProblemIds: number[] }) =>
      ProblemsService.getSimilarityProblems(
        params.problemId,
        params.excludedProblemIds,
      ),
    {
      onSuccess: (data) => setSimilarityProblemList(data),
    },
  )

  // ===== HELPER FUNCTIONS =====
  const findProblemInList = useCallback(
    (list: Problem[], problemId: number) =>
      list.find((p) => p.id === problemId),
    [],
  )

  const insertProblemAfterSelected = useCallback(
    (list: Problem[], problemToAdd: Problem, selectedId: number | null) => {
      if (selectedId === null) {
        return [...list, problemToAdd]
      }

      const selectedIndex = list.findIndex((p) => p.id === selectedId)
      if (selectedIndex === -1) {
        return [...list, problemToAdd]
      }

      const newList = [...list]
      newList.splice(selectedIndex + 1, 0, problemToAdd)
      return newList
    },
    [],
  )

  // ===== ACTIONS =====
  const getSimilarityProblemsAction = useCallback(
    (problemId: number) => {
      // API 호출 중이면 중복 호출 방지
      if (isSimilarityProblemListPending) return

      const excludedProblemIds = worksheetProblemList.map(
        (problem) => problem.id,
      )
      getSimilarityProblemList({ problemId, excludedProblemIds })
      setSelectedProblemId(problemId)
    },
    [
      getSimilarityProblemList,
      worksheetProblemList,
      isSimilarityProblemListPending,
    ],
  )

  const addProblemToWorksheet = useCallback(
    (problemId: number) => {
      const problemToAdd = findProblemInList(similarityProblemList, problemId)
      if (!problemToAdd) return

      setWorksheetProblemList((prev) =>
        insertProblemAfterSelected(prev, problemToAdd, selectedProblemId),
      )

      setSimilarityProblemList((prev) => prev.filter((p) => p.id !== problemId))
    },
    [
      selectedProblemId,
      similarityProblemList,
      findProblemInList,
      insertProblemAfterSelected,
    ],
  )

  const replaceProblemInWorksheet = useCallback(
    (newProblemId: number) => {
      if (selectedProblemId === null) return

      const newProblem = findProblemInList(similarityProblemList, newProblemId)
      const currentProblem = findProblemInList(
        worksheetProblemList,
        selectedProblemId,
      )

      if (!newProblem || !currentProblem) return

      // 워크시트에서 교체
      setWorksheetProblemList((prev) => {
        const selectedIndex = prev.findIndex((p) => p.id === selectedProblemId)
        if (selectedIndex === -1) return prev

        const newList = [...prev]
        newList[selectedIndex] = newProblem
        return newList
      })

      // 유사문제 목록에서 교체
      setSimilarityProblemList((prev) => {
        const newProblemIndex = prev.findIndex((p) => p.id === newProblemId)
        if (newProblemIndex === -1) return prev

        const newList = [...prev]
        newList[newProblemIndex] = currentProblem
        return newList
      })

      setSelectedProblemId(newProblem.id)
    },
    [
      selectedProblemId,
      similarityProblemList,
      worksheetProblemList,
      findProblemInList,
    ],
  )

  const removeProblemFromWorksheet = useCallback(
    (problemId: number) => {
      const wasSelectedProblem = selectedProblemId === problemId

      setWorksheetProblemList((prev) => prev.filter((p) => p.id !== problemId))

      if (wasSelectedProblem) {
        setSelectedProblemId(null)
        setSimilarityProblemList([])
        resetSimilarityProblemList()
      }
    },
    [selectedProblemId, resetSimilarityProblemList],
  )

  // ===== CONTEXT VALUE =====
  const worksheetValue: WorksheetBuilder = useMemo(
    () => ({
      // State
      worksheetProblemList,
      selectedProblemId,
      similarityProblemList,

      // Setters
      setWorksheetProblemList,
      setSimilarityProblemList,

      // Actions
      getSimilarityProblemsAction,
      addProblemToWorksheet,
      replaceProblemInWorksheet,
      removeProblemFromWorksheet,

      // API Status
      isSimilarityProblemListPending,
      isSimilarityProblemListSuccess,
      isSimilarityProblemListError,
    }),
    [
      // State
      worksheetProblemList,
      selectedProblemId,
      similarityProblemList,

      // Actions
      getSimilarityProblemsAction,
      addProblemToWorksheet,
      replaceProblemInWorksheet,
      removeProblemFromWorksheet,

      // API Status
      isSimilarityProblemListPending,
      isSimilarityProblemListSuccess,
      isSimilarityProblemListError,
    ],
  )

  return (
    <WorksheetBuilderContext.Provider value={worksheetValue}>
      {children}
    </WorksheetBuilderContext.Provider>
  )
}
