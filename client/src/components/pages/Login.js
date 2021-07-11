import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth/AuthState'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const authContext = useContext(AuthContext)
  const { login, error, clearErrors, isAuthenticated } = authContext

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/')
    }

    if (error) {
      toast.error(error)
      clearErrors()
    }
  }, [clearErrors, error, isAuthenticated, history])

  const submitHandler = e => {
    e.preventDefault()
    login(email, password)
    history.push('/products')
  }

  return (
    <div className='auth'>
      <ToastContainer />
      <h1><i className='fas fa-user'></i> Log In</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        
        <input type='submit' value='Login' className='btn' />
      </form>

      <p>Don't have an account? <Link to='/register'>Register</Link></p>
    </div>
  )
}

export default Login
