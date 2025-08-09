import { useMemo } from 'react'
import useWorksheetBuilderContext from '../../hooks/useWorksheetBuilderContext'
import Typography from '../common/Typography'
import styles from './WorksheetSummary.module.scss'
import type { ProblemLevel } from '../../models/problems'
import { formatProblemLevel } from '../../utils/formatProblemLevel'

export default function WorksheetSummary() {
  const { worksheetProblemList } = useWorksheetBuilderContext()

  // 난이도별 문제 개수 통계. 여기서밖에 안써서 아랫단에서 계산
  const levelStatistics = useMemo(() => {
    const stats: Record<ProblemLevel, number> = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    }

    worksheetProblemList.forEach((problem) => {
      stats[problem.level]++
    })

    return stats
  }, [worksheetProblemList])

  // 총 문제 개수
  const totalProblemCount = useMemo(() => {
    return worksheetProblemList.length
  }, [worksheetProblemList])

  // 난이도별 통계 텍스트 생성
  const levelStatsText = useMemo(() => {
    if (totalProblemCount === 0) return ''

    const statsArray = Object.entries(levelStatistics)
      .filter(([, count]) => count > 0)
      .map(
        ([level, count]) =>
          `${formatProblemLevel(Number(level) as ProblemLevel)} ${count}`,
      )

    return statsArray.length > 0 ? statsArray.join(' • ') + ' |' : ''
  }, [levelStatistics, totalProblemCount])

  return (
    <section className={styles.worksheetSummary}>
      <Typography variant="body1" color="gray-400">
        {levelStatsText}
      </Typography>
      <Typography
        variant="body1"
        weight="bold"
        color={totalProblemCount === 0 ? 'red-500' : 'white'}
      >
        문제 수 {totalProblemCount}개
      </Typography>
    </section>
  )
}
