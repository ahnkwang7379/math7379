import clsx from 'clsx'
import {
  createElement,
  type ElementType,
  type PropsWithChildren,
  type CSSProperties,
} from 'react'
import styles from './Typography.module.scss'

// 규모가 작으니 지금은 그냥 토큰에 있는 컬러만 허용
type ColorToken =
  | 'white'
  | 'teal-500'
  | 'yellow-500'
  | 'red-500'
  | 'blue-300'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'

interface TypographyProps {
  variant: 'body1' | 'body2' | 'h4' | 'caption1'
  weight?: 'regular' | 'medium' | 'bold'
  as?: ElementType
  color?: ColorToken
  className?: string
}

/**
 * @description
 * 텍스트 래핑 컴포넌트
 */
export default function Typography({
  children,
  as: Tag = 'p',
  variant,
  weight,
  color,
  className,
}: PropsWithChildren<TypographyProps>) {
  const styleClassList = clsx(
    styles[variant],
    weight && styles[weight],
    className,
  )

  const style: CSSProperties | undefined = color
    ? { color: `var(--color-${color})` }
    : undefined

  return createElement(Tag, { className: styleClassList, style }, children)
}
