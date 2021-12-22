import React, { createContext, useEffect, useReducer } from "react"
import axios from "axios"
import { authReducer } from "../reducer/authReducer"
import { apiUrl } from "./constants"
import setAuthToken from "../utils/setAuthToken"
import { SET_AUTH } from "../reducer/type"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate()
	useEffect(() => {
		loadUser()
	}, [])

	const [authState, dispatch] = useReducer(authReducer, {
		authLoading: true,
		isAuthenticated: false,
		user: null,
	})

	// call login api
	const callLogin = async (data) => {
		try {
			const response = await axios({
				method: 'POST',
				url: '/authen/login',
				baseURL: apiUrl,
				headers: {
					"Content-Type": 'application/json',
				},
				data: JSON.stringify(data)
			})
			if (response.data.success) {
				localStorage.setItem("accessToken", response.data.accessToken)
				loadUser()
			}
			return response.data
		} catch (error) {
			return error.message
		}
	}

	// call logout 
	const callLogout = () => {
		if (localStorage['accessToken']) {
			localStorage.removeItem('accessToken')
			setAuthToken(null)
			dispatch({
				type: SET_AUTH,
				payload: {
					isAuthenticated: false,
					user: null
				}
			})
			navigate('/login')
		} else {
			setAuthToken(null)
			dispatch({
				type: SET_AUTH,
				payload: {
					isAuthenticated: false,
					user: null
				}
			})
			navigate('/login')
		}
	}

	// authenticate user
	const loadUser = async function() {
		if (localStorage.getItem('accessToken')) {
			setAuthToken(localStorage.getItem('accessToken'))
		}
		try {
			const response = await axios.get(`${apiUrl}/authen`)
			if (response.data.success) {
				dispatch({
					type: SET_AUTH,
					payload: {
						isAuthenticated: true,
						user: response.data.user
					}
				})
			}
		} catch (error) {
			localStorage.removeItem('accessToken')
			setAuthToken(null)
			dispatch({type: SET_AUTH, payload: {
				isAuthenticated: false,
				user: null
			}})
		}
	}

	const authContextData = {
		callLogin,
		dispatch,
		authState,
		loadUser,
		callLogout
	}

	return (
		<AuthContext.Provider value={authContextData}>
			{children}
		</AuthContext.Provider>
	)
}
