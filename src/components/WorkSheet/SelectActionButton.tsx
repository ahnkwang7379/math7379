import useWorksheetBuilderContext from '../../hooks/useWorksheetBuilderContext'
import type { ProblemProps } from '../common/ProblemItem'
import Typography from '../common/Typography'
import styles from './SelectActionButton.module.scss'
import addCircleIcon from '../../assets/add-circle.svg'
import addCircleActiveIcon from '../../assets/add-circle-active.svg'

type SelectActionButtonProps = Pick<ProblemProps, 'id'>

/**
 * @description
 * 유사문제 불러오는 버튼
 * api가 동작중일 때 중복으로 눌리지 않게 하기 위해 disabled 처리
 * api내에서도 중복 호출 방지를 위해 중복 호출 방지 처리하지만, 스타일도 추가
 */
export default function SelectActionButton({ id }: SelectActionButtonProps) {
  const {
    getSimilarityProblemsAction,
    selectedProblemId,
    isSimilarityProblemListPending,
  } = useWorksheetBuilderContext()

  const isSelected = selectedProblemId === id

  return (
    <button
      className={styles.selectActionButton}
      type="button"
      onClick={() => getSimilarityProblemsAction(id)}
      disabled={isSimilarityProblemListPending}
    >
      <Typography
        variant="caption1"
        color={isSelected ? 'blue-300' : 'gray-600'}
        className={styles.selectActionContainer}
        as="div"
      >
        <img
          src={isSelected ? addCircleActiveIcon : addCircleIcon}
          alt="add-circle"
          className={styles.icon}
        />
        <span>유사문제</span>
      </Typography>
    </button>
  )
}
