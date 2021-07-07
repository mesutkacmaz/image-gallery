import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="auth">
      <h1><i className="fas fa-user"></i> Log In</h1>
      <form>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        
        <input type="submit" value="Login" className="btn" />
      </form>

      <p>Don't have an account? <Link to='/register'>Register</Link></p>
    </div>
  )
}

export default Login
