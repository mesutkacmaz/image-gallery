import { createContext, useReducer } from 'react'
import productReducer from './ProductReducer'
import axios from 'axios'
import { PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_LATEST_SUCCESS, PRODUCT_LIST_LATEST_FAIL } from '../types'

const initialState = {
  products: []
}

export const ProductContext = createContext(initialState)

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState)

  // Get All Products
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

  return (
    <ProductContext.Provider value={{ products: state.products, listLatestProducts }}>
      { children }
    </ProductContext.Provider>
  )
}