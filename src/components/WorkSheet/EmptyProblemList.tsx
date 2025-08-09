import Typography from '../common/Typography'
import styles from './EmptyProblemList.module.scss'

export default function EmptyProblemList() {
  return (
    <div className={styles.emptyProblemList}>
      <Typography variant="body2" color="white">
        학습지 문제수가 없습니다. <br />
        다음단계로 넘어가기 위해 문제를 추가해주세요.
      </Typography>
    </div>
  )
}
