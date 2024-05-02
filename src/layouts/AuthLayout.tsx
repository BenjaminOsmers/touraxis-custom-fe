import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <section className='bg-black w-full h-screen grid place-items-center'>
      <div className='bg-gray md:w-1/3 w-11/12 md:p-10 p-5 rounded-lg text-center flex flex-col gap-5'>
        <header className='text-center'>
          <h2 className='font-light text-lg'>Welcome to</h2>
          <h1 className='font-bold text-3xl'>Task Manager</h1>
        </header>
        <Outlet />
      </div>
    </section>
  )
}

export default AuthLayout
