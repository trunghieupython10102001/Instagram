import { ReactComponent as Icons } from "../../images/caret_right.svg"
import './ImageHandleIcon.scss'

export const CaretRight = ({handleNextImage}) => {
	return (
		// <Icons />
		<div onClick={handleNextImage} className="ImageHandleIcon next">
			<div className="ImageHandleIcon-container">
				<button className="ImageHandleIcon-btn NextIcon-btn">
					<Icons />
				</button>
			</div>
		</div>
	)
}