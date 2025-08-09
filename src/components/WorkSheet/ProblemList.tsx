import useWorksheetBuilderContext from '../../hooks/useWorksheetBuilderContext'
import ProblemItem from '../common/ProblemItem'
import styles from './ProblemList.module.scss'
import SelectActionButton from './SelectActionButton'
import RemoveActionButton from './RemoveActionButton'
import EmptyProblemList from './EmptyProblemList'

export default function ProblemList() {
  const { worksheetProblemList } = useWorksheetBuilderContext()

  if (worksheetProblemList.length <= 0) {
    return <EmptyProblemList />
  }
  return (
    <ul className={styles.problemList}>
      {worksheetProblemList.map(
        ({ id, level, type, problemImageUrl, title, answerRate }, index) => (
          <li key={`${id}-${index}-problem`}>
            <ProblemItem
              id={id}
              level={level}
              type={type}
              problemImageUrl={problemImageUrl}
              title={title}
              answerRate={answerRate}
              problemIndex={index}
              actionButtonList={[
                <SelectActionButton key="select-action-button" id={id} />,
                <RemoveActionButton key="remove-action-button" id={id} />,
              ]}
            />
          </li>
        ),
      )}
    </ul>
  )
}
