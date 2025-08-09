import type { ProblemProps } from './index.tsx'
import Typography from '../Typography/index.tsx'
import styles from './ProblemHeader.module.scss'

type ProblemHeaderProps = Pick<
  ProblemProps,
  'problemIndex' | 'title' | 'actionButtonList'
>

export default function ProblemHeader({
  problemIndex,
  title,
  actionButtonList,
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
      {actionButtonList.length > 0 && (
        <div className={styles.actionButtonList}>{actionButtonList}</div>
      )}
    </section>
  )
}
