import { memo } from 'react'
import type { ProblemProps } from './index.tsx'
import Typography from '../Typography/index.tsx'
import styles from './ProblemHeader.module.scss'
import ActionButtonList from './ActionButtonList'

type ProblemHeaderProps = Pick<
  ProblemProps,
  'problemIndex' | 'title' | 'actionType' | 'id'
>

function ProblemHeader({
  problemIndex,
  title,
  actionType,
  id,
}: ProblemHeaderProps) {
  return (
    <section className={styles.problemHeader}>
      {/* 인덱스 */}
      <Typography variant="h4" color="gray-900" weight="bold">
        {problemIndex + 1}
      </Typography>

      {/* 타이틀 */}
      <Typography
        variant="body2"
        color="gray-900"
        className={styles.title}
        title={title}
      >
        {title}
      </Typography>

      {/* 액션버튼 */}
      <ActionButtonList actionType={actionType} id={id} />
    </section>
  )
}

export default memo(ProblemHeader)
