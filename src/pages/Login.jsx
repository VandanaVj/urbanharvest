import { useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = () => {
    dispatch(login())
    navigate('/dashboard')
  }

  return (
    <div className='min-h-screen flex justify-center items-center bg-gradient-to-r from-green-500 to-green-700 p-5'>
      <div className='bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl'>
        <h1 className='text-4xl font-bold text-center mb-2'>
          Urban Harvest
        </h1>

        <p className='text-center text-gray-500 mb-8'>
          Food Delivery Admin Dashboard
        </p>

        <div className='space-y-5'>
          <input
            type='email'
            placeholder='Enter Email'
            className='w-full border p-4 rounded-xl outline-none'
          />

          <input
            type='password'
            placeholder='Enter Password'
            className='w-full border p-4 rounded-xl outline-none'
          />

          <div className='flex items-center gap-2'>
            <input type='checkbox' />
            <label>Remember Me</label>
          </div>

          <button
            onClick={handleLogin}
            className='w-full bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl font-semibold transition'
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login