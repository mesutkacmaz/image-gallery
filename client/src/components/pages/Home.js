import { Link } from "react-router-dom"
import source from "../../car-1.jpg"

const Home = () => {
  return (
    <section className='home-products py-2'>
      <div className="container">
        <h2>Latest Products</h2>
        <div className="products-container">
          <div className="card">
            <Link to='/products/1'>
              <img src={source} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
