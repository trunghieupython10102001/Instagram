import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import Loading from "../Loading/Loading"

const RequireAuth = ({ children }) => {
	const { authState } = useContext(AuthContext)
	const location = useLocation()

	if (authState.authLoading) {
		return <Loading />
	} else {
		if (authState.isAuthenticated) {
			return children
		}
		return <Navigate to="/login" state={{ from: location }} />
	}
}

export default RequireAuth
