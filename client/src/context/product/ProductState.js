import { createContext, useReducer } from 'react'
import productReducer from './ProductReducer'
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_TOP_REQUEST, PRODUCT_TOP_SUCCESS, PRODUCT_TOP_FAIL } from '../types'

const initialState = {
  products: []
}

export const ProductContext = createContext(initialState)

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState)

  // Get All Products

  // Get Single Product

  return (
    <ProductContext.Provider value={{ products: state.products, dispatch }}>
      { children }
    </ProductContext.Provider>
  )
}