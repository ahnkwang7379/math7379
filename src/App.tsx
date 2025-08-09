import styles from './App.module.scss'
import WorksheetBuilderProvider from './contexts/WorksheetBuilderProvider'
import SimilarityProblems from './components/SimilarityProblems'
import WorkSheet from './components/Worksheet'
import useApiHandler from './hooks/useApiHandler'
import { ProblemsService } from './services/problems.service'
import { useEffect, useState } from 'react'
import Spinner from './components/common/Spinner'
import Typography from './components/common/Typography'
import SimpleError from './components/common/SimpleError'
import clsx from 'clsx'

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

  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // 문제 불러오기
    getProblems()
  }, [])

  useEffect(() => {
    // 데이터 로딩이 완료되면 잠시 후 컨텐츠 표시
    if (problems && !isPending && !isError) {
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 100) // 100ms 딜레이로 부드러운 전환

      return () => clearTimeout(timer)
    }
  }, [problems, isPending, isError])

  // 로딩중 처리
  if (isIdle || isPending || !showContent)
    return (
      <div className={styles.spinnerContainer}>
        <Spinner>
          <Typography variant="body2" color="gray-600">
            문제 불러오는 중입니다...
          </Typography>
        </Spinner>
      </div>
    )

  if (isError) {
    return (
      <div className={styles.spinnerContainer}>
        <SimpleError
          title="문제 목록을 불러올 수 없습니다"
          message="네트워크 연결을 확인하고 다시 시도해 주세요."
          onRetry={() => getProblems()}
          retryText="다시 불러오기"
        />
      </div>
    )
  }

  return (
    <WorksheetBuilderProvider initProblems={problems || []}>
      <article className={clsx([styles.app, styles.fadeIn])}>
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
