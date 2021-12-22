import "./Post.scss"
import { Dots } from "../Icons/Dots"
// import { BigHeartfilled } from "../../Icons/BigHeartfilled"
// import { BookmarkFilled } from "../../Icons/BookmarkFilled"
import { BigHeartOutline } from "../Icons/BigHeartOutline"
import { Comment } from "../Icons/Comment"
import { BookmarkOutline } from "../Icons/BookmarkOutline"
import { BigPlane } from "../Icons/BigPlane"
import { Smile } from "../Icons/Smile"
import { CaretLeft } from "../Icons/CaretLeft"
import { CaretRight } from "../Icons/CaretRight"
import { useEffect, useRef, useState } from "react"
import Imagepreview from "../ImagePreview/ImagePreview"

const Post = ({ images, avatar, username, content, location }) => {
	const contentRef = useRef()
	const [currentImage, setCurrentImage] = useState(0)

	const [contentHidden, setContentHidden] = useState(() => {
		if (content) {
			return content.split("").length >= 120
		}
		return ""
	})
	const [disabled, setDisabled] = useState(true)

	const handleNextImage = () => {
		setCurrentImage((prev) => prev + 1)
	}
	const handleBackImage = () => {
		setCurrentImage((prev) => prev - 1)
	}

	const handleCommentChange = (e) => {
		if (e.target.value.length > 0) {
			setDisabled(false)
		} else {
			setDisabled(true)
		}
	}

	const handleHiddenContentClick = () => {
		setContentHidden(!contentHidden)
	}

	useEffect(() => {
		let newContent = content
		newContent = newContent
			.replace(/\r\n/g, "<br />")
			.replace(/[\r\n]/g, "<br />")
		const maxLength = 120
		let trimmedString = newContent.substr(0, maxLength)
		trimmedString = trimmedString.substr(
			0,
			Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
		)
		contentHidden
			? (contentRef.current.innerHTML = trimmedString)
			: (contentRef.current.innerHTML = newContent)
	}, [contentHidden, content])

	return (
		<div className="Post">
			<div className="Post-container">
				<div className="Post__head">
					<div className="Post__head-left">
						<div className="avatar">
							<a href="/">
								<img
									src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/254549628_1532690087092725_503017275021991785_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ILiuaQl_WPoAX9OE-EY&_nc_ht=scontent.fhan5-6.fna&oh=00_AT8wprRlFwaV03ty4yeaNh7MesLaxDTqkZIwvEO88T2Rjw&oe=61C3633B"
									alt="lalisa"
								/>
							</a>
						</div>
						<a href="/">
							<span className="name">{username}</span>
						</a>
					</div>
					<div className="button">
						<Dots />
					</div>
				</div>
				<div className="Post__media">
					{currentImage > 0 && (
						<CaretLeft handleBackImage={handleBackImage} />
					)}
					{currentImage < images.length - 1 && (
						<CaretRight handleNextImage={handleNextImage} />
					)}
					<Imagepreview src={images[currentImage]} />
				</div>

				<div className="Post__tail">
					<div className="icons">
						<div className="left">
							<div className="button">
								<BigHeartOutline />
							</div>
							<div className="button">
								<Comment />
							</div>
							<div className="button">
								<BigPlane />
							</div>
						</div>
						<div className="right">
							<div className="button">
								<BookmarkOutline />
							</div>
						</div>
					</div>
					<div className="likes">
						<a href="/">
							<span>10,251</span> likes
						</a>
					</div>
					<div className="content">
						<p className="text">
							<a href="/">
								<span className="name">{username}</span>
							</a>{" "}
							<span ref={contentRef} className="main-content">
								{content}
							</span>
							{contentHidden && (
								<span className="truncate">
									...{" "}
									<span
										onClick={handleHiddenContentClick}
										className="more-btn"
									>
										more
									</span>
								</span>
							)}
						</p>
						<div className="view-comment">
							<span>
								View all <span>10</span> comments
							</span>
						</div>
					</div>
					<div className="time">
						<span>1 day ago</span>
					</div>
					<section className="add-cmt">
						<div className="container">
							<form method="POST" action="">
								<div className="button">
									<Smile />
								</div>
								<textarea
									aria-label="Add a comment..."
									placeholder="Add a comment..."
									autoComplete="off"
									autoCorrect="off"
									onInput={handleCommentChange}
								></textarea>
								<button disabled={disabled}>Post</button>
							</form>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}

export default Post
