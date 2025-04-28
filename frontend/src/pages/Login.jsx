import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const {backendUrl , token, setToken} = useContext(AppContext) // fixed import statement
  const navigate = useNavigate()
  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      
      if(state === 'Sign Up'){

        const {data} = await axios.post(backendUrl + '/api/user/register', {name ,email, password})
        if (data.success){
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else{
          toast.error(data.message,{
            className: 'custom-toast-error',
            progressClassName: 'custom-progress-bar'
          })

        }

      } else {

        const {data} = await axios.post(backendUrl + '/api/user/login', {email, password})
        if (data.success){
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else{
          toast.error(data.message,{
            className: 'custom-toast-error',
            progressClassName: 'custom-progress-bar'
          })

      }
    }


    } catch (error) {

      toast.error(error.message,{
        className: 'custom-toast-error',
        progressClassName: 'custom-progress-bar'
      })
      
    }

  }

  useEffect(() => {
    if(token) {
      navigate('/')

    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'> {/* fixed typo: clssName -> className */}
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-700 text-sm shadow-xl bg-white'> {/* enhanced colors & added bg */}
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p className='text-zinc-500 mb-2'>Please {state === 'Sign Up' ? "sign up" : "log in"} to book appointment</p>

        {state === "Sign Up" &&
          <div className='w-full'>
            <p className='mb-1'>Full Name</p>
            <input
              className='border border-zinc-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-primary'
              type="text"
              onChange={(e) => setName(e.target.value)} // fixed .name -> .value
              value={name}
              required
            />
          </div>
        }

        <div className='w-full'>
          <p className='mb-1'>Email</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-primary'
            type="email"
            onChange={(e) => setEmail(e.target.value)} // fixed .name -> .value
            value={email}
            required
          />
        </div>

        <div className='w-full'>
          <p className='mb-1'>Password</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-primary'
            type="password"
            onChange={(e) => setPassword(e.target.value)} // fixed .name -> .value
            value={password}
            required
          />
        </div>

        <button type ="submit"  className='bg-primary text-white w-full py-2 rounded-md text-base hover:opacity-90 transition-all mt-2'>
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </button>

        {
          state === 'Sign Up' ?
            <p className='text-sm mt-2'>Already have an Account?
              <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer ml-1'>Login Here</span>
            </p>
            :
            <p className='text-sm mt-2'>Create a new account?
              <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer ml-1'>Click Here</span>
            </p>
        }
      </div>
    </form>
  )
}

export default Login
