import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Spinner from '../Spinner'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Products = ({ match }) => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`)

      setProduct(data)
      setLoading(false)
    }

    fetchProduct()
  }, [match.params.id])


  return (
    <>
      <section className='prev-next'>
        <div className='container'>
          <div>
            <Link to='/products' className='btn btn-sm'>Go Back</Link>
          </div>
          <div>
            <Link to='/products/0' className='btn btn-sm'>Prev</Link>
            <Link to='/products/2' className='btn btn-sm'>Next</Link>
          </div>
        </div>
      </section>

      <section className='product-details'>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Carousel>
              {product.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt="" />
                </div>
              ))}
            </Carousel>
            <div>
              <h4>Description</h4>
              <p>{product.description}</p>
              <h4>Date</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <h4>Categories</h4>
              <p>{product.categories}</p>
              <h4>Client</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </>
        )}
      </section>
    </>
  )
}

export default Products
