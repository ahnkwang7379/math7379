import { useState, useEffect } from 'react'
import useWorksheetBuilderContext from '../../hooks/useWorksheetBuilderContext'
import Typography from '../common/Typography'
import Spinner from '../common/Spinner'
import styles from './SimilarityProblems.module.scss'
import SimilarityProblemsList from './SimilarityProblemsList'
import SimilarityProblemsError from './SimilarityProblemsError'

/**
 * @description
 * 유사문제 목록 컴포넌트
 */
export default function SimilarityProblems() {
  const {
    isSimilarityProblemListPending,
    isSimilarityProblemListError,
    isSimilarityProblemListSuccess,
  } = useWorksheetBuilderContext()

  const [showContent, setShowContent] = useState(false)


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
        <SimilarityProblemsError />
      )}


      {!isSimilarityProblemListPending &&
        !isSimilarityProblemListError &&
        showContent && (
          <div className={styles.fadeIn}>
            <Typography variant="body1" color="gray-900" weight="bold">
              유사 문항
            </Typography>
            <SimilarityProblemsList/>
          </div>
        )}
    </section>
  )
}
