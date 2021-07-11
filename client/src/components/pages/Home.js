import { useEffect, useContext } from 'react'
import { ProductContext } from '../../context/product/ProductState'
import { Link } from 'react-router-dom'
import Masonry from 'react-masonry-css'
import Product from '../Product'
import Spinner from '../Spinner'

const Home = () => {
  const { latestProducts, listLatestProducts, loading } = useContext(ProductContext)

  useEffect(() => {
    listLatestProducts()
  }, [listLatestProducts])

  return (
    <section className='home-products py-2'>
      <div className='container'>
        <h2>Latest Products</h2>
        <div className='products-container'>
          {loading && (
            <Spinner />
          )}
          <Masonry breakpointCols={breakpointColumnsObj} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
            {latestProducts.map(product => (
              <Product key={product._id} product={product} />
            ))}
          </Masonry>
        </div>
        <Link to='/products' className='btn btn-sm'>View All Products</Link>
      </div>
    </section>
  )
}

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  500: 1
}

export default Home
