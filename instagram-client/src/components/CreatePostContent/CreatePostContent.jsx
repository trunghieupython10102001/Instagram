import "./CreatePostContent.scss"
import { SmileSmall } from "../Icons/SmileSmall"
import { LocationIcon } from "../Icons/LocationIcon"
import { BigCaretDown } from "../Icons/BigCaretDown"
import {
	forwardRef,
	useContext,
	useImperativeHandle,
	useRef,
	useState,
} from "react"
import { AuthContext } from "../../contexts/AuthContext"

function CreatePostContent(props, ref) {
	const contentRef = useRef()
	const locationRef = useRef()
	const [charCount, setCharCount] = useState(0)

	const { authState } = useContext(AuthContext)

	useImperativeHandle(ref, () => ({
		getContent() {
			return contentRef.current.value
		},
		getLocation() {
			return locationRef.current.value
		},
	}))

	const handleCharCount = (e) => {
		setCharCount(e.target.value.length)
	}

	return (
		<div className="CreatePostContent">
			<div className="CreatePostContent-container-1">
				<div className="CreatePostContent-container-2">
					<div className="CreatePostContent-container-3">
						<div className="CreatePostContent-head">
							<div className="head-container-1">
								<div className="head-container-2">
									<div className="head-avatar">
										<img
											src="https://firebasestorage.googleapis.com/v0/b/instagram-ad6aa.appspot.com/o/Thomas.jpeg?alt=media&token=09c40ffd-5046-424f-935e-f01b9f676ab7"
											alt="/"
										/>
									</div>
									<div className="head-name">
										<p>{authState.user.username}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="CreatePostContent-caption">
							<div className="caption-container">
								<textarea
									onInput={handleCharCount}
									ref={contentRef}
									aria-label="Write a caption..."
									placeholder="Write a caption..."
									autoComplete="off"
									autoCorrect="off"
									className="caption-area"
								></textarea>
							</div>
							<div className="emoji-container">
								<div className="emoji-pick">
									<button className="emoji-btn">
										<SmileSmall />
									</button>
								</div>
								<div className="text-count">
									<span className="char-count">
										{charCount}
									</span>
									<span className="max-char">/2,200</span>
								</div>
							</div>
						</div>
						<div className="CreatePostContent-location">
							<label
								htmlFor="location"
								className="location-label"
							>
								<input
									ref={locationRef}
									id="location"
									type="text"
									autoComplete="off"
									placeholder="Add location"
									className="location-input"
								/>
							</label>
							<div className="location-icon">
								<LocationIcon />
							</div>
						</div>
						<div className="CreatePostContent-accordion">
							<div className="accordion-text">
								<span>Accessibility</span>
							</div>
							<div className="accordion-icon">
								<BigCaretDown />
							</div>
						</div>
						<div className="CreatePostContent-accordion">
							<div className="accordion-text">
								<span>Advanced settings</span>
							</div>
							<div className="accordion-icon">
								<BigCaretDown />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default forwardRef(CreatePostContent)
