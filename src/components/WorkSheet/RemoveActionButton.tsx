import useWorksheetBuilderContext from '../../hooks/useWorksheetBuilderContext'
import type { ProblemProps } from '../common/ProblemItem'
import styles from './RemoveActionButton.module.scss'
import deleteIcon from '../../assets/delete.svg'
import Typography from '../common/Typography'

type RemoveActionButtonProps = Pick<ProblemProps, 'id'>

/**
 * @description
 * 선택된 문제를 삭제하는 버튼
 */
export default function RemoveActionButton({ id }: RemoveActionButtonProps) {
  const { removeProblemFromWorksheet } = useWorksheetBuilderContext()
  return (
    <button
      className={styles.removeActionButton}
      type="button"
      onClick={() => removeProblemFromWorksheet(id)}
    >
      <Typography
        variant="caption1"
        color="gray-600"
        className={styles.removeActionContainer}
        as="div"
      >
        <img src={deleteIcon} alt="delete" className={styles.icon} />
        <span>삭제</span>
      </Typography>
    </button>
  )
}
