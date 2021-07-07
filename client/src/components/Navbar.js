import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="nav">
      <div class="container">
        <h1 class="logo">Image Gallery</h1>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/login'> <i className="fas fa-sign-in-alt"></i> Login</Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
