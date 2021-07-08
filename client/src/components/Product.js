import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <div>
      <Link to={`/products/${product._id}`}>
        <img src={product.images[0]} alt="" />
      </Link>
    </div>
  )
}

export default Product
