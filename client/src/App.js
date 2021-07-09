import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Product from './components/pages/Product';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { ProductProvider } from './context/product/ProductState'

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route path='/products/:id' component={Product} />
        <Footer />
      </Router>
    </ProductProvider>
  );
}

export default App;
