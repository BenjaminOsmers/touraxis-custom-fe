import { useState } from 'react'
import { useField, FieldHookConfig } from 'formik'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { IInputProps } from '../types/input.types'

const Input = ({
  type,
  placeholder,
  icon,
  label,
  ...props
}: IInputProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <div className='flex flex-col justify-start text-left w-full'>
      {label && (
        <label
          htmlFor={field.name}
          className='text-sm text-gray-400 font-light pb-1'
        >
          {label}
        </label>
      )}
      <div
        className={`bg-lighter-gray p-2 rounded-md flex items-center ${
          meta.touched && meta.error ? 'border border-error' : ''
        }`}
      >
        <div
          className={`${
            meta.touched && meta.error ? 'text-error' : 'text-white'
          } `}
        >
          {icon && icon}
        </div>
        <input
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          {...field}
          className={`bg-lighter-gray w-full ${
            meta.touched && meta.error
              ? 'text-error placeholder-error'
              : 'text-white placeholder-white'
          } pl-2 font-light  text-sm placeholder:text-sm focus:outline-none`}
          placeholder={placeholder}
        />
        {type === 'password' && (
          <button
            className='bg-gray-100 rounded-full pr-1 hover:bg-gray-200 transition-all ease-in-out duration-300'
            onClick={() => setShowPassword(!showPassword)}
            type='button'
          >
            {showPassword ? (
              <BsEye className='h-4 w-4' />
            ) : (
              <BsEyeSlash className='h-4 w-4' />
            )}
          </button>
        )}
      </div>
    </div>
  )
}

export default Input
