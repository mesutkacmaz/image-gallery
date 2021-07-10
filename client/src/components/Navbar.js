import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth/AuthState'

const Navbar = () => {
  const authContext = useContext(AuthContext)
  const { isAuthenticated, logout } = authContext

  return (
    <nav className='nav'>
      <div className='container'>
        <h1 className='logo'>Image Gallery</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/products'>Products</Link></li>
          {isAuthenticated ? (
            <li><Link to='/login' onClick={logout}><i className='fas fa-sign-out-alt'></i> Logout</Link></li>
          ) : (
            <li><Link to='/login' className='btn-login'><i className='fas fa-sign-in-alt'></i> Login</Link></li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
