import { Link } from "react-router-dom"
import source from '../../car-1.jpg'

const Product = () => {
  return (
    <>
      <section className="prev-next">
        <div className="container">
          <div>
            <Link to='/products' className='btn btn-sm'>Go Back</Link>
          </div>
          <div>
            <Link to='/products/0' className='btn btn-sm'>Prev</Link>
            <Link to='/products/2' className='btn btn-sm'>Next</Link>
          </div>
        </div>
      </section>

      <section className="product-details">
        <img src={source} alt="" />
        <div>
          <h4>Description</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur eaque nam repellendus exercitationem beatae. Facere fugit dolores voluptatibus corporis ut.</p>
          <h4>Date</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          <h4>Categories</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          <h4>Client</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </section>
    </>
  )
}

export default Product
