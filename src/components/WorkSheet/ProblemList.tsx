import useWorksheetBuilderContext from '../../hooks/useWorksheetBuilderContext'
import Problem from '../common/Problem/index'
import styles from './ProblemList.module.scss'

export default function ProblemList() {
  const { worksheetProblemList } = useWorksheetBuilderContext()

  return (
    <ul className={styles.problemList}>
      {worksheetProblemList.map(
        ({ id, level, type, problemImageUrl, title, answerRate }, index) => (
          <li>
            <Problem
              key={`${id}-${index}-problem`}
              id={id}
              level={level}
              type={type}
              problemImageUrl={problemImageUrl}
              title={title}
              answerRate={answerRate}
              problemIndex={index}
              actionButtonList={[]}
            />
          </li>
        ),
      )}
    </ul>
  )
}
