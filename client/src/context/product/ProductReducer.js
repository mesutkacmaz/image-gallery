import { PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../types'

const productReducer = (state, action) => {
  switch (action.type) {
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload
      }
    case PRODUCT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default productReducer
