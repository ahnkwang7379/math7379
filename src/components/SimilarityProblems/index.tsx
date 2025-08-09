import { useState, useEffect } from 'react'
import useWorksheetBuilderContext from '../../hooks/useWorksheetBuilderContext'
import Typography from '../common/Typography'
import Spinner from '../common/Spinner'
import SimpleError from '../common/SimpleError'
import styles from './SimilarityProblems.module.scss'
import SimilarityProblemsNotice from './SimilarityProblemsNotice'
import SimilarityProblemsList from './SimilarityProblemsList'

/**
 * @description
 * 유사문제 목록 컴포넌트
 */
export default function SimilarityProblems() {
  const {
    similarityProblemList,
    isSimilarityProblemListPending,
    isSimilarityProblemListError,
    isSimilarityProblemListSuccess,
    getSimilarityProblemsAction,
    selectedProblemId,
  } = useWorksheetBuilderContext()

  const [showContent, setShowContent] = useState(false)

  const handleRetry = () => {
    if (selectedProblemId) {
      getSimilarityProblemsAction(selectedProblemId)
    }
  }

  useEffect(() => {
    // 유사문제 로딩이 완료되면 잠시 후 컨텐츠 표시
    if (isSimilarityProblemListSuccess) {
      setShowContent(false) // 먼저 숨기기
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 50) // 50ms 딜레이로 빠른 전환

      return () => clearTimeout(timer)
    } else {
      setShowContent(false)
    }
  }, [isSimilarityProblemListSuccess])

  return (
    <section className={styles.similarityProblems}>
      {isSimilarityProblemListPending && (
        <Spinner>
          <Typography variant="body2" color="gray-600">
            유사 문제 검색 중입니다.
          </Typography>
        </Spinner>
      )}

      {isSimilarityProblemListError && (
        <SimpleError
          title="유사 문제를 불러올 수 없습니다"
          message="네트워크 연결을 확인하고 다시 시도해 주세요."
          onRetry={handleRetry}
          retryText="다시 시도"
        />
      )}

      {!isSimilarityProblemListPending &&
        !isSimilarityProblemListError &&
        similarityProblemList.length === 0 && <SimilarityProblemsNotice />}

      {!isSimilarityProblemListPending &&
        !isSimilarityProblemListError &&
        similarityProblemList.length > 0 &&
        showContent && (
          <div className={styles.fadeIn}>
            <Typography variant="body1" color="gray-900" weight="bold">
              유사 문항
            </Typography>
            <SimilarityProblemsList
              similarityProblemList={similarityProblemList}
            />
          </div>
        )}
    </section>
  )
}
