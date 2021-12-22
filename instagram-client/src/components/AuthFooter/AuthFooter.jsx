import "./AuthFooter.scss"
import { CaretDown } from "../Icons/CaretDown"

export default function AuthFooter({ login }) {
	return (
		<footer className="AuthFooter">
			<div className="AuthFooter-container">
				<div className="AuthFooter-functions">
					<div className="functions-list">
						<div className="functions-list-item">
							<a href="/">Meta</a>
						</div>
						<div className="functions-list-item">
							<a href="/">About</a>
						</div>
						<div className="functions-list-item">
							<a href="/">Blog</a>
						</div>
						<div className="functions-list-item">
							<a href="/">Jobs</a>
						</div>
						<div className="functions-list-item">
							<a href="/">Help</a>
						</div>
						<div className="functions-list-item">
							<a href="/">API</a>
						</div>
						<div className="functions-list-item">
							<a href="/">Privacy</a>
						</div>
						<div className="functions-list-item">
							<a href="/">Terms</a>
						</div>
						<div className="functions-list-item">
							<a href="/">Top Accounts</a>
						</div>
						<div className="functions-list-item">
							<a href="/">Hashtags</a>
						</div>
						<div className="functions-list-item">
							<a href="/">Locations</a>
						</div>
						<div className="functions-list-item">
							<a href="/">Instagram Lite</a>
						</div>
					</div>
					{login && (
						<div className="functions-list">
							<div className="functions-list-item">
								<a href="/">Beauty</a>
							</div>
							<div className="functions-list-item">
								<a href="/">Dance</a>
							</div>
							<div className="functions-list-item">
								<a href="/">Fitness</a>
							</div>
							<div className="functions-list-item">
								<a href="/">Food & Drink</a>
							</div>
							<div className="functions-list-item">
								<a href="/">Home & Garden</a>
							</div>
							<div className="functions-list-item">
								<a href="/">Music</a>
							</div>
							<div className="functions-list-item">
								<a href="/">Visual Arts</a>
							</div>
						</div>
					)}
				</div>
				<div className="AuthFooter-author">
					<div className="language">
						<span className="text">English</span>
						<div className="icon">
							<CaretDown />
						</div>
					</div>
					<div className="copyrights">
						<span>© 2021 Instagram from Meta</span>
					</div>
				</div>
			</div>
		</footer>
	)
}
