import { ReactComponent as Icons } from "../../images/caret_left.svg"
import './ImageHandleIcon.scss'

export const CaretLeft = ({handleBackImage}) => {
	return (
		// <Icons />
		<div onClick={handleBackImage} className="ImageHandleIcon back">
			<div className="ImageHandleIcon-container">
				<button className="ImageHandleIcon-btn BackIcon-btn">
					<Icons />
				</button>
			</div>
		</div>
	)
}
