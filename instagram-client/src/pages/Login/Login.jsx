import "./Login.scss"
import LoginImage from "../../components/LoginImage/LoginImage"
import LoginForm from "../../components/LoginForm/LoginForm"
import AuthFooter from "../../components/AuthFooter/AuthFooter"
import { useLocation, useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const Login = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state?.from?.pathname || "/"
	const {
		authState: { isAuthenticated },
	} = useContext(AuthContext)

	useEffect(() => {
		if (isAuthenticated) {
			navigate(from, { replace: true })
			navigate("/")
		}
	}, [isAuthenticated, from, navigate])

	console.log(isAuthenticated)

	return (
		<main className="Login">
			<div className="container">
				<LoginImage />
				<LoginForm />
			</div>
			<AuthFooter login={true} />
		</main>
	)
}

export default Login
