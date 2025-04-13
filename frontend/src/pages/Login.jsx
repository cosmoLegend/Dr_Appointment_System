import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    if (state === 'Sign Up') {
      // sign up logic here
      console.log('Signing Up:', { name, email, password })
    } else {
      // login logic here
      console.log('Logging In:', { email, password })
    }
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className='min-h-[80vh] flex items-center justify-center px-4'
    >
      <div className='bg-white shadow-lg p-8 rounded-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold text-gray-800 mb-2'>
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </h2>
        <p className='text-sm text-gray-500 mb-6'>
          Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointments
        </p>

        {state === 'Sign Up' && (
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-600 mb-1'>Full Name</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
              required
            />
          </div>
        )}

        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-600 mb-1'>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-600 mb-1'>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
            required
          />
        </div>

        <button
          type='submit'
          className='w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition'
        >
          {state === 'Sign Up' ? 'Sign Up' : 'Login'}
        </button>

        <p className='text-sm text-center text-gray-500 mt-4'>
          {state === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"}
          <span
            className='text-primary font-medium cursor-pointer ml-1'
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
          >
            {state === 'Sign Up' ? 'Login' : 'Sign Up'}
          </span>
        </p>
      </div>
    </form>
  )
}

export default Login
 