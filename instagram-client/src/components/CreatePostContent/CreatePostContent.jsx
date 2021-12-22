import "./CreatePostContent.scss"
import { SmileSmall } from "../Icons/SmileSmall"
import { LocationIcon } from "../Icons/LocationIcon"
import { BigCaretDown } from "../Icons/BigCaretDown"
import {
	forwardRef,
	useImperativeHandle,
	useRef,
	useState,
} from "react"

function CreatePostContent(props, ref) {
	const contentRef = useRef()
	const locationRef = useRef()
	const [charCount, setCharCount] = useState(0)

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
											src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/254549628_1532690087092725_503017275021991785_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ILiuaQl_WPoAX9OE-EY&_nc_ht=scontent.fhan5-6.fna&oh=00_AT8wprRlFwaV03ty4yeaNh7MesLaxDTqkZIwvEO88T2Rjw&oe=61C3633B"
											alt="/"
										/>
									</div>
									<div className="head-name">
										<p>trung_hieuit</p>
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
