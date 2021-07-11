import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth/AuthState'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const authContext = useContext(AuthContext)
  const { register, isAuthenticated, error, clearErrors } = authContext

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/')
    }

    if (error) {
      toast.error(error)
      clearErrors()
    }
  }, [history, isAuthenticated, clearErrors, error])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
    }
    register(name, email, password)
  }

  return (
    <div className='auth'>
      <ToastContainer />
      <h1><i className='fas fa-user'></i> Register</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input type='password' id='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>

        <input type='submit' value='Register' className='btn' />
      </form>

      <p>Already have an account? <Link to='/login'>Login</Link></p>
    </div>
  )
}

export default Register
