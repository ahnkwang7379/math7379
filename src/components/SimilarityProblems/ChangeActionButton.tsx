import { memo } from 'react'
import styles from './ChangeActionButton.module.scss'
import swapIcon from '../../assets/swap_horiz.svg'
import Typography from '../common/Typography'
import useWorksheetBuilderContext from '../../hooks/useWorksheetBuilderContext'

interface ChangeActionButtonProps {
  id: number
}

/**
 * @description
 * 선택된 문제와 교체하는 버튼
 */
function ChangeActionButton({ id }: ChangeActionButtonProps) {
  const { replaceProblemInWorksheet } = useWorksheetBuilderContext()

  return (
    <button
      className={styles.changeActionButton}
      type="button"
      onClick={() => replaceProblemInWorksheet(id)}
    >
      <Typography
        variant="caption1"
        color="gray-600"
        className={styles.changeActionContainer}
        as="div"
      >
        <img src={swapIcon} alt="swap" className={styles.icon} />
        <span>교체</span>
      </Typography>
    </button>
  )
}

export default memo(ChangeActionButton)
