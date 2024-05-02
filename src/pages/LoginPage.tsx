import { LoginForm, FormFooter } from '../components'

const LoginPage = () => {
  return (
    <>
      <p className='font-light'>Please log in to continue</p>
      <LoginForm />
      <FormFooter
        text="Don't have an account?"
        linkUrl='/register'
        linkText='Register'
      />
    </>
  )
}

export default LoginPage
