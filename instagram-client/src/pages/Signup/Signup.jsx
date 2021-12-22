import AuthFooter from "../../components/AuthFooter/AuthFooter"
import SignupForm from "../../components/SignupForm/SignupForm"
import "./Signup.scss"

const Signup = () => {
	return (
		<main className="Signup">
			<div className="container">
				<SignupForm />
			</div>
			<AuthFooter />
		</main>
	)
}

export default Signup
