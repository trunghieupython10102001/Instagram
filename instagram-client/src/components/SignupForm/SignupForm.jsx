import FormSeparator from "../FormSeparator/FormSeparator"
import { useForm } from "react-hook-form"
import Input from "../Input/Input"
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn"
import "./SignupForm.scss"
import FbLogo from "../../images/fbwhite.png"
import GetApp from "../GetApp/GetApp"
import SwitchForm from "../SwitchForm/SwitchForm"
import axios from "axios"
import { apiUrl } from "../../contexts/constants"
import { useNavigate } from "react-router-dom"

const SignupForm = () => {
	const { register, handleSubmit } = useForm()
	const navigate = useNavigate()
	const callSignup = async (data) => {
		try {
			const response = await axios({
				method: "POST",
				url: "/authen/signup",
				baseURL: apiUrl,
				headers: {
					"Content-Type": "application/json",
				},
				data: JSON.stringify(data),
			})
			if (response.data.success) {
				navigate("/login")
			}
			console.log(response.data)
			return response.data
		} catch (error) {
			console.log(error.messsage)
			return error.messsage
		}
	}

	const onSubmit = (data) => {
		callSignup(data)
	}

	return (
		<div className="SignupForm">
			<div className="Main-form">
				<div className="logo">
					<img
						src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
						alt=""
					/>
				</div>
				<div className="slogan">
					<h2>Sign up to see photos and videos from your friends.</h2>
				</div>
				<div className="fb-login fb-login--white">
					<button className="fb-login-btn fb-login-btn--white">
						<div className="fb-logo">
							<img src={FbLogo} alt="" />
						</div>
						<div className="fb-text">Log in with Facebook</div>
					</button>
				</div>
				<div className="form-container">
					<form onSubmit={handleSubmit(onSubmit)} className="form" action="">
						<div className="wrapper">
							<FormSeparator />
							<Input
								name={"email"}
								placeholder={"Mobile Number or Email"}
								type={"text"}
								register={register}
							/>
							<Input
								name={"fullname"}
								placeholder={"Full name"}
								type={"text"}
								register={register}
							/>
							<Input
								name={"username"}
								placeholder={"Username"}
								type={"text"}
								register={register}
							/>
							<Input
								name={"password"}
								placeholder={"Password"}
								type={"password"}
								register={register}
							/>
							<PrimaryBtn name={"Sign up"} />
						</div>
					</form>
				</div>
				<p className="policy">
					By signing up, you agree to our <a href="/">Terms</a> ,{" "}
					<a href="/">Data</a> <a href="/">Policy</a> and{" "}
					<a href="/">Cookies Policy</a>
				</p>
			</div>
			<SwitchForm text={"Have an account?"} page={"Log in"} />
			<GetApp />
		</div>
	)
}

export default SignupForm
