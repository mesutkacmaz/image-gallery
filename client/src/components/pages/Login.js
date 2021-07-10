import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth/AuthState'

const Login = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const authContext = useContext(AuthContext)
  const { login } = authContext

  const submitHandler = e => {
    e.preventDefault()
    login(email, password)
    history.push('/products')
  }

  return (
    <div className='auth'>
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
