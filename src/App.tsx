import styles from './App.module.scss'
import WorksheetBuilderProvider from './contexts/WorksheetBuilderProvider'
import SimilarityProblems from './components/SimilarityProblems'
import WorkSheet from './components/WorkSheet'
import useApiHandler from './hooks/useApiHandler'
import { ProblemsService } from './services/problems.service'
import { useEffect } from 'react'

function App() {
  const {
    execute: getProblems,
    data: problems,
    isIdle,
    isPending,
    isError,
  } = useApiHandler(ProblemsService.getProblems)

  useEffect(() => {
    // 문제 불러오기
    getProblems()
  }, [])

  // 로딩중 처리
  if (isIdle || isPending) return <div>TODO: 로딩처리</div>

  if (isError) return <div>TODO: 에러처리</div>

  return (
    <WorksheetBuilderProvider problems={problems || []}>
      <article className={styles.container}>
        {/* 유사문항 */}
        <SimilarityProblems />
        {/* 학습지 상세 편집 */}
        <WorkSheet />
      </article>
    </WorksheetBuilderProvider>
  )
}

export default App
