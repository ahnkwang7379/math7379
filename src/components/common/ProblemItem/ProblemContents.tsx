import Typography from '../Typography/index.tsx'
import type { ProblemProps } from './index.tsx'
import styles from './ProblemContents.module.scss'
import {
  formatProblemLevel,
  formatProblemLevelColor,
} from '../../../utils/formatProblemLevel.ts'
import { formatProblemType } from '../../../utils/formatProblemType.ts'
import ProblemImage from './ProblemImage.tsx'

type ProblemContentsProps = Pick<
  ProblemProps,
  'title' | 'level' | 'type' | 'problemImageUrl' | 'answerRate'
>

export default function ProblemContents({
  title,
  level,
  type,
  problemImageUrl,
  answerRate,
}: ProblemContentsProps) {
  return (
    <section className={styles.problemContents}>
      {/* 메타정보 */}
      <div className={styles.metaInfoList}>
        <Typography
          className={styles.metaTag}
          variant="caption1"
          color={formatProblemLevelColor(level)}
        >
          {formatProblemLevel(level)}
        </Typography>
        <Typography
          className={styles.metaTag}
          variant="caption1"
          color="gray-700"
        >
          {answerRate}%
        </Typography>
        <Typography
          className={styles.metaTag}
          variant="caption1"
          color="gray-600"
        >
          {formatProblemType(type)}
        </Typography>
      </div>

      {/* 문제 이미지 */}
      <ProblemImage title={title} problemImageUrl={problemImageUrl} />
    </section>
  )
}
