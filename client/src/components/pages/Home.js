import { useState, useEffect } from 'react'
import axios from 'axios'
import Masonry from 'react-masonry-css'
import Product from '../Product'
import Spinner from '../Spinner'

const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')

      setProducts(data)
      setLoading(false)
    }

    fetchProducts()
  }, [])

  return (
    <section className='home-products py-2'>
      <div className="container">
        <h2>Latest Products</h2>
        <div className="products-container">
          {loading && (
            <Spinner />
          )}
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
