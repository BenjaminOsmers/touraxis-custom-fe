import * as Yup from 'yup'

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required')
})

const registerValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords must match'
  ),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required')
})

export { loginValidationSchema, registerValidationSchema }
