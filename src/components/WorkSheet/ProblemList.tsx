import { memo } from 'react'
import useWorksheetBuilderContext from '../../hooks/useWorksheetBuilderContext'
import ProblemItem from '../common/ProblemItem'
import styles from './ProblemList.module.scss'
import EmptyProblemList from './EmptyProblemList'

function ProblemList() {
  const { worksheetProblemList } = useWorksheetBuilderContext()

  if (worksheetProblemList.length <= 0) {
    return <EmptyProblemList />
  }

  return (
    <ul className={styles.problemList}>
      {worksheetProblemList.map(
        ({ id, level, type, problemImageUrl, title, answerRate }, index) => (
          <li key={id}>
            <ProblemItem
              id={id}
              level={level}
              type={type}
              problemImageUrl={problemImageUrl}
              title={title}
              answerRate={answerRate}
              problemIndex={index}
              actionType="worksheet"
            />
          </li>
        ),
      )}
    </ul>
  )
}

export default memo(ProblemList)
