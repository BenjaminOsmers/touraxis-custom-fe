import { Formik, FormikHelpers } from 'formik'
import { loginValidationSchema } from '../helpers/validation.schemas'
import { Input, Button } from '.'
import { useNavigate } from 'react-router-dom'
import { BsFillPersonFill, BsFillLockFill } from 'react-icons/bs'
import axiosInstance from '../helpers/axios.instance'

interface FormValues {
  email: string
  password: string
}

const LoginForm = () => {
  const navigate = useNavigate()

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      setSubmitting(true)
      const res = await axiosInstance.post('/users/sign-in', {
        email: values.email,
        password: values.password
      })

      const response = res.data

      response.firstname &&
        sessionStorage.setItem('firstname', response.firstname)
      response.lastname && sessionStorage.setItem('lastname', response.lastname)
      sessionStorage.setItem('isLoggedIn', 'true')

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
        password: ''
      }}
      validationSchema={loginValidationSchema}
      onSubmit={(values, actions: FormikHelpers<FormValues>) =>
        handleSubmit(values, actions)
      }
    >
      {({ isSubmitting, handleSubmit }) => (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
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

export default LoginForm
