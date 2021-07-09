import { useState, useEffect, useContext } from 'react'
import { ProductContext } from '../../context/product/ProductState'
import Masonry from 'react-masonry-css'
import Product from '../Product'
import Spinner from '../Spinner'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const { products, listProducts } = useContext(ProductContext)

  useEffect(() => {
    listProducts()
    setLoading(false)
  }, [listProducts])

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
      </div>
    </section>
  )
}

export default Home
