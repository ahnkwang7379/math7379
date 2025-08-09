import Typography from '../common/Typography'
import ProblemList from './ProblemList'
import WorksheetSummary from './WorksheetSummary'
import styles from './WorkSheet.module.scss'

export default function Worksheet() {
  return (
    <section className={styles.worksheet}>
      <Typography
        variant="body1"
        weight="bold"
        color="white"
        as="h4"
        className={styles.header}
      >
        학습지 상세 편집
      </Typography>

      {/* 문제 리스트 */}
      <ProblemList />

      {/* 하단 전체 문제 수 & 난이도 통계 */}
      <WorksheetSummary />
    </section>
  )
}
