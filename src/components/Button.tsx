import Loader from './Loader'
import type { IButtonProps } from '../types/button.types'

const Button = ({
  icon,
  text,
  variant,
  onClick,
  fullWidth,
  disabled = false,
  type = 'button',
  paddingSmall = false,
  loading = false
}: IButtonProps) => {
  return (
    <button
      className={`${
        paddingSmall ? 'p-2 text-sm' : 'p-4'
      } flex items-center rounded-lg transition-colors duration-200 ${
        fullWidth ? 'w-full justify-center' : ''
      } ${
        variant === 'cta' ? 'bg-accent text-gray hover:bg-accent-light' : ''
      } ${
        variant === 'plain' ? 'text-white bg-transparent hover:text-accent' : ''
      }
    ${
      variant === 'secondary'
        ? 'bg-gray-transparent text-white border border-white hover:border-lighter-gray hover:bg-lighter-gray'
        : ''
    }
    ${
      disabled
        ? 'cursor-not-allowed bg-light-gray hover:bg-light-gray'
        : 'cursor-pointer'
    }
    `}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && icon}
      {text && <span className={`${icon ? 'w-auto' : 'w-full'}`}>{text}</span>}
      {loading && <Loader />}
    </button>
  )
}

export default Button
