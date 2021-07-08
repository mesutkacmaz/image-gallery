import { Link } from "react-router-dom"
import products from '../../products'
import Masonry from 'react-masonry-css'
import Product from '../Product'

const Home = () => {
  return (
    <section className='home-products py-2'>
      <div className="container">
        <h2>Latest Products</h2>
        <div className="products-container">
          <Masonry breakpointCols={3} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            {products.map(product => (
              <Product key={product._id} product={product} />
            ))}
          </Masonry>
        </div>
      </div>
    </section>
  )
}

export default Home
