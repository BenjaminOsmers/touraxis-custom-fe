import { RegisterForm, FormFooter } from '../components'

const RegisterPage = () => {
  return (
    <>
      <p className='font-light'>Please register to continue</p>
      <RegisterForm />
      <FormFooter
        text='Already have an account?'
        linkUrl='/'
        linkText='Register'
      />
    </>
  )
}

export default RegisterPage
