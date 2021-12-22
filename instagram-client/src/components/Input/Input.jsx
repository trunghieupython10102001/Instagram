import { useState } from "react"
import clsx from "clsx"
import "./Input.scss"

export default function Input({ placeholder, name, type, register }) {
	const [isFocus, setIsFocus] = useState(false)
	const [isTyping, setIsTyping] = useState(false)
	const [isHidden, setIsHidden] = useState(true)
	const [isSwitchOn, setIsSwitchOn] = useState(false)
	const [isPassword, setIsPassword] = useState(type)

	const handleFocus = () => {
		setIsFocus(true)
	}

	const handleBlur = () => {
		setIsFocus(false)
	}

	const handleInput = (e) => {
		setIsTyping(e.target.value.length > 0)
		if (type === "password") {
			setIsSwitchOn(e.target.value.length > 0)
		}
	}

	const handleToggle = (e) => {
		e.preventDefault()
		setIsHidden(!isHidden)
		if (isPassword === 'password') {
			setIsPassword('text')
		} else {
			setIsPassword('password')
		}
	}

	return (
		<div className="input-container">
			<div className={clsx("input-wrapper", isFocus && "wrapper-focus")}>
				<label
					onClick={handleFocus}
					htmlFor={name}
					className={clsx("input-label", isTyping && "label-focus")}
				>
					<span className="input-place">{placeholder}</span>
					<input
						onBlur={handleBlur}
						id={name}
						onInput={handleInput}
						className="input-unfocus input-type"
						type={isPassword}
						aria-label="Phone number, username, or email"
						aria-required="true"
						autoCapitalize="true"
						autoCorrect="off"
						maxLength={75}
						name={name}
						{...register(name)}
					/>
				</label>
				{type === "password" ? (
					<div className="p-right">
						<div className="button">
							{isSwitchOn && <button onClick={handleToggle}>{isHidden ? 'Show' : 'Hide'}</button>}
						</div>
					</div>
				) : (
					<div className="p-right"></div>
				)}
			</div>
		</div>
	)
}
