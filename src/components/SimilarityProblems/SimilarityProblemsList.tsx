import { memo } from 'react'
import ProblemItem from '../common/ProblemItem'
import styles from './SimilarityProblemsList.module.scss'
import useWorksheetBuilderContext from '../../hooks/useWorksheetBuilderContext'
import SimilarityProblemsNotice from './SimilarityProblemsNotice'

function SimilarityProblemsList() {
  const { similarityProblemList } = useWorksheetBuilderContext()

  if (similarityProblemList.length === 0) {
    return <SimilarityProblemsNotice />
  }

  return (
    <ul className={styles.similarityProblemsList}>
      {similarityProblemList.map(
        ({ id, level, type, problemImageUrl, title, answerRate }) => (
          <li key={id} className={styles.problemItem}>
            <ProblemItem
              id={id}
              level={level}
              type={type}
              problemImageUrl={problemImageUrl}
              title={title}
              answerRate={answerRate}
              actionType="similarity"
            />
          </li>
        ),
      )}
    </ul>
  )
}

export default memo(SimilarityProblemsList)
