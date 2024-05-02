import type { ILoaderProps } from '../types/loader.types'

const Loader = ({ small, center = true }: ILoaderProps) => {
  return (
    <div
      className={`w-full ${small ? 'py-0' : 'py-5'} grid ${
        center ? 'place-items-center' : ''
      }`}
    >
      <div
        className={`inline-block ${
          small ? 'h-4 w-4' : 'h-8 w-8'
        } animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
        role='status'
      >
        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
          Loading...
        </span>
      </div>
    </div>
  )
}

export default Loader
