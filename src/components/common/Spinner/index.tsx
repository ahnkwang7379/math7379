import { type ReactNode } from 'react'
import styles from './Spinner.module.scss'

interface SpinnerProps {
  children?: ReactNode
}

export default function Spinner({ children }: SpinnerProps) {
  if (children) {
    return (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinnerWithText}>
          <div className={styles.spinner} />
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner} />
    </div>
  )
}
