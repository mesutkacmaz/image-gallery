import { createContext, useReducer } from 'react'
import authReducer from './AuthReducer'
import axios from 'axios'
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../types'

const initialState = {
  loading: true,
  user: null,
  error: null
}

export const AuthContext = createContext(initialState)

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  // Register an user
  const register = (name, email, password) => async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const { data } = await axios.post('/api/users', { name, email, password }, config)

      dispatch({
        type: REGISTER_SUCCESS,
        payload: data,
      })
  
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      })
  
      localStorage.setItem('user', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
    }
  }

  const login = (email, password) => async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const { data } = await axios.post('/api/users/login', { email, password }, config)

      dispatch({
        type: LOGIN_SUCCESS,
        payload: data
      })
  
      localStorage.setItem('user', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
    }
  }

  const logout = () => (dispatch) => {
    localStorage.removeItem('user')
    dispatch({ type: LOGOUT })
    document.location.href = '/login'
  }

  return (
    <ProductContext.Provider value={{ loading: state.loading, error: state.error, user: state.user, listLatestProducts, register, login, logout, dispatch }}>
      { children }
    </ProductContext.Provider>
  )
}