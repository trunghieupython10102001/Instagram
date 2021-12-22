import "./SwitchForm.scss"
import { Link } from "react-router-dom"

export default function SwitchForm({ text, page }) {
	return (
		<div className="switch-form">
			<div className="switch-form-container">
				<p>
					{text}{" "}
					{page === "Log in" ? (
						<Link to={"/login"}>
							<span>{page}</span>
						</Link>
					) : (
						<Link to={"/signup"}>
							<span>{page}</span>
						</Link>
					)}
				</p>
			</div>
		</div>
	)
}
