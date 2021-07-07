import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="auth">
      <h1><i className="fas fa-user"></i> Register</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" />
        </div>

        <input type="submit" value="Register" className="btn" />
      </form>

      <p>Already have an account? <Link to='/login'>Login</Link></p>
    </div>
  )
}

export default Register
