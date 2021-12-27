import Modal from "../Modal/Modal"
import "./DiscardPost.scss"

const Discardpost = ({
	handleDiscard,
	handleCancel,
	title,
	description,
	discardText,
}) => {
	return (
		<Modal opacity={0.65}>
			<div className="DiscardPost">
				<div className="DiscardPost-container">
					<div className="DiscardPost-wrapper">
						<div className="DiscardPost-content">
							<h3 className="DiscardPost-content__title">
								{title}
							</h3>
							<div className="DiscardPost-content__description">
								{description}
							</div>
						</div>
						<div className="DiscardPost-btns">
							<button
								onClick={handleDiscard}
								className="DiscardPost-button discard-btn"
							>
								{discardText}
							</button>
							<button
								onClick={handleCancel}
								className="DiscardPost-button cancel-btn"
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	)
}

export default Discardpost
