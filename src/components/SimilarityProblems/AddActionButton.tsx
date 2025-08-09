import useWorksheetBuilderContext from '../../hooks/useWorksheetBuilderContext'
import type { ProblemProps } from '../common/ProblemItem'
import styles from './AddActionButton.module.scss'
import addIcon from '../../assets/add-circle.svg'
import Typography from '../common/Typography'

type AddActionButtonProps = Pick<ProblemProps, 'id'>

/**
 * @description
 * 선택된 문제 뒤에 새 문제를 추가하는 버튼
 */
export default function AddActionButton({ id }: AddActionButtonProps) {
  const { addProblemToWorksheet } = useWorksheetBuilderContext()
  return (
    <button
      className={styles.addActionButton}
      type="button"
      onClick={() => addProblemToWorksheet(id)}
    >
      <Typography
        variant="caption1"
        color="gray-600"
        className={styles.addActionContainer}
        as="div"
      >
        <img src={addIcon} alt="add" className={styles.icon} />
        <span>추가</span>
      </Typography>
    </button>
  )
}
