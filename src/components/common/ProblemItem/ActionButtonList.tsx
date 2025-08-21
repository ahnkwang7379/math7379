import AddActionButton from '../../SimilarityProblems/AddActionButton'
import ChangeActionButton from '../../SimilarityProblems/ChangeActionButton'
import RemoveActionButton from '../../Worksheet/RemoveActionButton'
import SelectActionButton from '../../Worksheet/SelectActionButton'
import styles from './ActionButtonList.module.scss'

interface ActionButtonListProps {
  actionType: 'similarity' | 'worksheet'
  id: number
}

export default function ActionButtonList({
  actionType,
  id,
}: ActionButtonListProps) {
  return (
    <div className={styles.actionButtonList}>
      {actionType === 'similarity' && (
        <>
          <ChangeActionButton id={id} />
          <AddActionButton id={id} />
        </>
      )}
      {actionType === 'worksheet' && (
        <>
          <SelectActionButton id={id} />
          <RemoveActionButton id={id} />
        </>
      )}
    </div>
  )
}
