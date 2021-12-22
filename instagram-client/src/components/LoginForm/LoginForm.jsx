import FormSeparator from "../FormSeparator/FormSeparator"
import { useForm } from "react-hook-form"
import Input from "../Input/Input"
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn"
import "./LoginForm.scss"
import FbLogo from "../../images/facebook.png"
import GetApp from "../GetApp/GetApp"
import SwitchForm from "../SwitchForm/SwitchForm"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const LoginForm = () => {
	const { register, handleSubmit } = useForm()
	const {
		callLogin,
	} = useContext(AuthContext)

	const onSubmit = (data) => {
		try {
			callLogin(data)
		} catch (error) {
			return error.message
		}
	}

	return (
		<div className="LoginForm">
			<div className="Main-form">
				<div className="logo">
					<img
						src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
						alt=""
					/>
				</div>
				<div className="form-container">
					<form
						className="form"
						action=""
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className="wrapper">
							<Input
								name={"email"}
								placeholder={"Phone number, username, or email"}
								type={"text"}
								register={register}
							/>
							<Input
								name={"password"}
								placeholder={"Password"}
								type={"password"}
								register={register}
							/>
							<PrimaryBtn name={"Log In"} />
							<FormSeparator />
							<div className="fb-login">
								<button className="fb-login-btn">
									<div className="fb-logo">
										<img src={FbLogo} alt="" />
									</div>
									<div className="fb-text">
										Log in with Facebook
									</div>
								</button>
							</div>
						</div>
						<div className="forgot-pwd">
							<a href="/">Forgot password?</a>
						</div>
					</form>
				</div>
			</div>
			<SwitchForm text={"Don't have an account?"} page={"Sign up"} />
			<GetApp />
		</div>
	)
}

export default LoginForm
