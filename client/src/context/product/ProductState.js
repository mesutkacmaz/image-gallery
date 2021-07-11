import { createContext, useReducer } from 'react'
import productReducer from './ProductReducer'
import axios from 'axios'
import { PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_LATEST_SUCCESS, PRODUCT_LIST_LATEST_FAIL } from '../types'
import setAuthToken from '../../utils/setAuthToken'

const initialState = {
  products: [],
  latestProducts: [],
  loading: true
}

export const ProductContext = createContext(initialState)

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState)

  // Get Latest Products
  const listLatestProducts = async () => {
    try {
      const { data } = await axios.get('/api/products/latest')

      dispatch({ type: PRODUCT_LIST_LATEST_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_LATEST_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
    }
  }

  // Get All Products
  const listProducts = async () => {
    setAuthToken(localStorage.token)
    try {
      const { data } = await axios.get('/api/products')
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
    }
  }

  return (
    <ProductContext.Provider value={{ products: state.products, latestProducts: state.latestProducts, loading: state.loading, listProducts, listLatestProducts }}>
      { children }
    </ProductContext.Provider>
  )
}