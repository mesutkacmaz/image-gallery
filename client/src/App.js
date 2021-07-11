import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Products from './components/pages/Products'
import Product from './components/pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import { ProductProvider } from './context/product/ProductState'
import { AuthProvider } from './context/auth/AuthState'

const App = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <PrivateRoute path='/products/:id' component={Product} />
          <PrivateRoute exact path='/products' component={Products} />
          <Footer />
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
