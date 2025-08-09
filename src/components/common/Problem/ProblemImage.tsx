import type { ProblemProps } from './index'
import { useState, useMemo } from 'react'
import styles from './ProblemImage.module.scss'

type ProblemImageProps = Pick<ProblemProps, 'title' | 'problemImageUrl'>

/**
 * @description
 * 문제 이미지 컴포넌트
 * 이미지 로딩 실패 시 fallback 이미지 표시
 */
export default function ProblemImage({
  title,
  problemImageUrl,
}: ProblemImageProps) {
  const [imageError, setImageError] = useState<boolean>(false)

  // fallback 이미지
  const fallbackImageSrc = useMemo(() => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f5f5f5" stroke="#d1d5db" stroke-width="2" stroke-dasharray="8,8" rx="8"/>
        <g transform="translate(150,80)">
          <circle cx="0" cy="0" r="25" fill="#e5e7eb"/>
          <path d="M-15,-5 L-5,-15 L5,-5 L15,-15 L25,-5 L25,15 L-15,15 Z" fill="#9ca3af"/>
          <circle cx="8" cy="-8" r="4" fill="#fff"/>
        </g>
        <text x="150" y="130" text-anchor="middle" font-size="12" fill="#6b7280">
          이미지를 불러오는데 실패했습니다.
        </text>
      </svg>
    `
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
  }, [])

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <img
      src={imageError ? fallbackImageSrc : problemImageUrl}
      alt={imageError ? '이미지를 불러올 수 없습니다' : `${title}-문제 이미지`}
      loading="lazy"
      className={styles.problemImage}
      onError={handleImageError}
    />
  )
}
