import "./UploadLoading.scss"

const Uploadloading = ({ share: { sharing, shared } }) => {
	return (
		<div className="UploadLoading">
			{sharing && (
				<img
					src="https://www.instagram.com/static/images/creation/spinner10s.gif/25a440f983de.gif"
					alt="loading"
				/>
			)}
			{shared && (
				<>
					<img
						src="https://www.instagram.com/static/images/creation/30fpsCheckLoopsOnce.gif/10a8cbeb94ba.gif"
						alt="loading"
					/>{" "}
					<div className="announce">
						<h2>Your post has been shared.</h2>
					</div>
				</>
			)}
		</div>
	)
}

export default Uploadloading
