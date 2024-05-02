import { Link } from 'react-router-dom'
import type { IFormFooterProps } from '../types/form-footer.types'

const FormFooter = ({ text, linkUrl, linkText }: IFormFooterProps) => {
  return (
    <footer className='flex items-center text-sm justify-center gap-3'>
      <p>{text}</p>
      <Link to={linkUrl} className='text-accent group'>
        <span>{linkText}</span>
        <hr className='w-0 group-hover:w-full transition-all duration-300 ease-in-out' />
      </Link>
    </footer>
  )
}

export default FormFooter
