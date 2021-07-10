import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth/AuthState'

const Register = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const authContext = useContext(AuthContext)
  const { register, user } = authContext

  useEffect(() => {
    if (user) {
      history.push('/')
    }
  }, [history, user])

  const submitHandler = (e) => {
    e.preventDefault()
    // if (password !== confirmPassword) {
    //   // Set Message
    // }
    register(name, email, password)
  }

  return (
    <div className='auth'>
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
