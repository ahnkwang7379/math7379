import AddActionButton from '../../SimilarityProblems/AddActionButton'
import ChangeActionButton from '../../SimilarityProblems/ChangeActionButton'
import RemoveActionButton from '../../Worksheet/RemoveActionButton'
import SelectActionButton from '../../Worksheet/SelectActionButton'
import styles from './ActionButtonList.module.scss'

interface ActionButtonListProps {
  actionType: 'similarity' | 'worksheet'
  id: number
}

/**
 * @description
 * 하위 액션 컴포넌트들이 context를 직접 구독해서
 * 아이템 리스트 변경시 재렌더링이 일어날 곳
 */
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
