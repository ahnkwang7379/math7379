import type { Problem } from '../../../models/problems'
import styles from './Problem.module.scss'
import ProblemHeader from './ProblemHeader'
import ProblemContents from './ProblemContents'

export type ProblemProps = Problem & {
  problemIndex: number // 문제 인덱스 (id와 다른 실제 순번)
  actionButtonList: React.ReactNode[] // 버튼 목록
}

/**
 * @description
 * 문제 컴포넌트
 */
export default function Problem({
  problemIndex,
  level,
  type,
  problemImageUrl,
  title,
  answerRate,
  actionButtonList,
}: ProblemProps) {
  return (
    <article className={styles.problem}>
      {/* 헤더 */}
      <ProblemHeader
        problemIndex={problemIndex}
        title={title}
        actionButtonList={actionButtonList}
      />

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
