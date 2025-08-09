import { type ReactNode } from 'react'
import Typography from '../Typography'
import styles from './SimpleError.module.scss'

interface SimpleErrorProps {
  title?: string
  message?: string
  onRetry?: () => void
  retryText?: string
  children?: ReactNode
}

/**
 * @description
 * 간단한 오류 표시 컴포넌트
 * 오류 타이틀, 메시지, 재시도 버튼, 재시도 텍스트, 자식 컴포넌트를 받아서 오류 표시
 * 재시도 버튼 클릭 시 onRetry 함수 호출
 * 재시도 버튼 클릭 시 페이지 새로고침
 */
export default function SimpleError({
  title = '오류가 발생했습니다',
  message = '잠시 후 다시 시도해 주세요.',
  onRetry,
  retryText = '새로고침',
  children,
}: SimpleErrorProps) {
  const handleRetry = () => {
    if (onRetry) {
      onRetry()
    } else {
      // 기본 동작: 페이지 새로고침
      window.location.reload()
    }
  }

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorIcon}>
        <span className={styles.errorIconText}>!</span>
      </div>

      <div className={styles.errorContent}>
        <Typography variant="body1" color="gray-900" weight="bold">
          {title}
        </Typography>

        <Typography variant="body2" color="gray-600">
          {message}
        </Typography>

        {children}
      </div>

      <button className={styles.refreshButton} onClick={handleRetry}>
        {retryText}
      </button>
    </div>
  )
}
