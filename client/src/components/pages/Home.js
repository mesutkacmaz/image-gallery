import { useState, useEffect, useContext } from 'react'
import { ProductContext } from '../../context/product/ProductState'
import { Link } from 'react-router-dom'
import Masonry from 'react-masonry-css'
import Product from '../Product'
import Spinner from '../Spinner'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const { products, listLatestProducts } = useContext(ProductContext)

  useEffect(() => {
    listLatestProducts()
    setLoading(false)
  }, [listLatestProducts])

  return (
    <section className='home-products py-2'>
      <div className='container'>
        <h2>Latest Products</h2>
        <div className='products-container'>
          {loading && (
            <Spinner />
          )}
          <Masonry breakpointCols={3} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
            {products.map(product => (
              <Product key={product._id} product={product} />
            ))}
          </Masonry>
        </div>
        <Link to='/products' className='btn btn-sm'>View All Products</Link>
      </div>
    </section>
  )
}

export default Home
