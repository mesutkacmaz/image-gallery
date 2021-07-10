import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../types'

const authReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case LOGIN_SUCCESS:
      return {
        ...state, 
        loading: false, 
        user: action.payload 
      }
    case LOGIN_FAIL:
      return {
        ...state, 
        loading: false, 
        error: action.payload 
      }
    case LOGOUT:
      return {}
    default:
      return state
  }
}

export default authReducer
