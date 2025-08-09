import Typography from '../common/Typography'
import styles from './SimilarityProblemsNotice.module.scss'
import addCircleIcon from '../../assets/add-circle.svg'

export default function SimilarityProblemsNotice() {
  return (
    <div className={styles.similarityProblemsNotice}>
      <div className={styles.similarContainer}>
        <Typography
          variant="caption2"
          color="gray-600"
          className={styles.similar}
          as="div"
        >
          <img src={addCircleIcon} alt="add-circle" className={styles.icon} />
          <span>유사문제</span>
        </Typography>
        <Typography variant="body2" color="gray-900">
          버튼을 누르면
        </Typography>
      </div>
      <Typography variant="body2" color="gray-900">
        문제를 추가 또는 교체할수 있습니다.
      </Typography>
    </div>
  )
}
