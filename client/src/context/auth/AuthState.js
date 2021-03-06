import { createContext, useReducer } from 'react'
import authReducer from './AuthReducer'
import axios from 'axios'
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS } from '../types'

const initialState = {
  token: localStorage.getItem('token'),
  loading: true,
  error: null,
  isAuthenticated: localStorage.getItem('token')
}

export const AuthContext = createContext(initialState)

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  // Register an user
  const register = async (name, email, password) => {
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
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
    }
  }

  const login = async (email, password) => {
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
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
    }
  }

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS })

  const logout = () => {
    dispatch({ type: LOGOUT })
    document.location.href = '/login'
  }

  return (
    <AuthContext.Provider value={{ loading: state.loading, error: state.error, token: state.token, isAuthenticated: state.isAuthenticated, register, login, clearErrors, logout }}>
      { children }
    </AuthContext.Provider>
  )
}