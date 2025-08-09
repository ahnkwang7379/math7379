import type { Problem } from '../../models/problems'
import ProblemItem from '../common/ProblemItem'
import styles from './SimilarityProblemsList.module.scss'
import ChangeActionButton from './ChangeActionButton'
import AddActionButton from './AddActionButton'

type SimilarityProblemsListProps = {
  similarityProblemList: Problem[]
}

export default function SimilarityProblemsList({
  similarityProblemList,
}: SimilarityProblemsListProps) {
  return (
    <ul className={styles.similarityProblemsList}>
      {similarityProblemList.map(
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
                <ChangeActionButton key="change-action-button" id={id} />,
                <AddActionButton key="add-action-button" id={id} />,
              ]}
            />
          </li>
        ),
      )}
    </ul>
  )
}
