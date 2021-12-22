import clsx from "clsx"
import CloseBtn from "../CloseBtn/CloseBtn"
import "./Modal.scss"
export default function Modal({ opacity, children, close, handleClose }) {
	return (
		<div
			onClick={handleClose}
			style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
			className={clsx("Modal")}
		>
			{close && <CloseBtn  />}
			{children}
		</div>
	)
}
