import "./CloseBtn.scss"
import { Close } from "../Icons/Close"

export default function CloseBtn() {
	return (
		<div className="CloseBtn">
			<button className="CloseBtn-container">
				<Close />
			</button>
		</div>
	)
}
