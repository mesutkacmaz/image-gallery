import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="nav">
      <div class="container">
        <h1 class="logo">Image Gallery</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/login'><i className="fas fa-sign-in-alt"></i> Login</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
