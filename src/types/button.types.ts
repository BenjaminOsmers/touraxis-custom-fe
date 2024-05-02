import { ReactNode } from 'react'

interface IButtonProps {
  icon?: ReactNode
  text?: string
  variant?: 'plain' | 'cta' | 'secondary'
  fullWidth?: boolean
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  paddingSmall?: boolean
  loading?: boolean
}

export type { IButtonProps }
