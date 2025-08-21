import { memo } from 'react'
import type { Problem } from '../../../models/problems'
import styles from './Problem.module.scss'
import ProblemHeader from './ProblemHeader'
import ProblemContents from './ProblemContents'

export type ProblemProps = Problem & {
  actionType: 'similarity' | 'worksheet'
}

/**
 * @description
 * 문제 컴포넌트
 */
function ProblemItem({
  level,
  type,
  problemImageUrl,
  title,
  answerRate,
  actionType,
  id,
}: ProblemProps) {
  return (
    <article className={styles.problem}>
      {/* 헤더 */}
      <ProblemHeader title={title} actionType={actionType} id={id} />

      {/* 내용 */}
      <ProblemContents
        title={title}
        level={level}
        type={type}
        problemImageUrl={problemImageUrl}
        answerRate={answerRate}
      />
    </article>
  )
}

export default memo(ProblemItem)
