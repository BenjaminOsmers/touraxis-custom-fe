import { Formik, FormikHelpers } from 'formik'
import { registerValidationSchema } from '../helpers/validation.schemas'
import { Input, Button } from '.'
import { useNavigate } from 'react-router-dom'
import { BsFillPersonFill, BsFillLockFill } from 'react-icons/bs'
import axiosInstance from '../helpers/axios.instance'

interface FormValues {
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
}

const RegisterForm = () => {
  const navigate = useNavigate()

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      setSubmitting(true)
      await axiosInstance.post('/users/register', {
        email: values.email,
        password: values.password,
        firstname: values.firstName,
        lastname: values.lastName
      })

      navigate('/')
    } catch (error) {
      //   setShowToast(true);
      //   setToast({
      //     message: "Your email or password is incorrect",
      //     type: "error",
      //   });
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
      }}
      validationSchema={registerValidationSchema}
      onSubmit={(values, actions: FormikHelpers<FormValues>) =>
        handleSubmit(values, actions)
      }
    >
      {({ isSubmitting, handleSubmit }) => (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <Input
            name='firstName'
            type='text'
            placeholder='Enter your first name'
            icon={<BsFillPersonFill className='h-5 w-5' />}
          />
          <Input
            name='lastName'
            type='text'
            placeholder='Enter your last name'
            icon={<BsFillPersonFill className='h-5 w-5' />}
          />
          <Input
            name='email'
            type='email'
            placeholder='Enter your email address'
            icon={<BsFillPersonFill className='h-5 w-5' />}
          />
          <Input
            name='password'
            type='password'
            placeholder='Enter Password'
            icon={<BsFillLockFill className='h-5 w-5' />}
          />
          <Input
            name='confirmPassword'
            type='password'
            placeholder='Confirm Password'
            icon={<BsFillLockFill className='h-5 w-5' />}
          />
          <Button
            type='submit'
            disabled={isSubmitting}
            text='Login'
            variant='cta'
            fullWidth
            paddingSmall
          />
        </form>
      )}
    </Formik>
  )
}

export default RegisterForm
