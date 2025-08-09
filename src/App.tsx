import styles from './App.module.scss'
import WorksheetBuilderProvider from './contexts/WorksheetBuilderProvider'
import SimilarityProblems from './components/SimilarityProblems'
import WorkSheet from './components/Worksheet'
import useApiHandler from './hooks/useApiHandler'
import { ProblemsService } from './services/problems.service'
import { useEffect } from 'react'

/**
 * @description
 * 학습지 상세 편집 페이지
 * 따로 라우트 뚫지 않고 단일페이지로 구성
 * 단순 react & typescript로 구현한 프로젝트로 SPA 형태로 구현
 */
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
    <WorksheetBuilderProvider initProblems={problems || []}>
      <article className={styles.app}>
        <section className={styles.container}>
          {/* 유사문항 */}
          <SimilarityProblems />
          {/* 학습지 상세 편집 */}
          <WorkSheet />
        </section>
      </article>
    </WorksheetBuilderProvider>
  )
}

export default App
