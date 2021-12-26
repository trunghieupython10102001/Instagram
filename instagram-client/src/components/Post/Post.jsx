import "./Post.scss"
import { Dots } from "../Icons/Dots"
// import { BigHeartfilled } from "../../Icons/BigHeartfilled"
// import { BookmarkFilled } from "../../Icons/BookmarkFilled"
import { BigHeartOutline } from "../Icons/BigHeartOutline"
import { Comment } from "../Icons/Comment"
import { HeartRed } from "../Icons/HeartRed"
import { BookmarkOutline } from "../Icons/BookmarkOutline"
import { BigPlane } from "../Icons/BigPlane"
import { Smile } from "../Icons/Smile"
import { CaretLeft } from "../Icons/CaretLeft"
import { CaretRight } from "../Icons/CaretRight"
import { useContext, useEffect, useRef, useState } from "react"
import Imagepreview from "../ImagePreview/ImagePreview"
import handleDate from "../../utils/handleDate"
import LikePostHeart from "../LikePostHeart/LikePostHeart"
import { AuthContext } from "../../contexts/AuthContext"
import axios from "axios"
import setAuthToken from "../../utils/setAuthToken"
import { apiUrl } from "../../contexts/constants"

const Post = ({
	post: {
		_id,
		images,
		avatar,
		authorName,
		content,
		location,
		createdAt,
		comments,
		likes,
	},
}) => {
	const contentRef = useRef()
	const [currentImage, setCurrentImage] = useState(0)
	const { authState } = useContext(AuthContext)
	const [isPostLiked, setIsPostLiked] = useState(() =>
		likes.includes(authState.user._id)
	)
	const [contentHidden, setContentHidden] = useState(() => {
		if (content) {
			return content.split("").length >= 120
		}
		return ""
	})
	const [disabled, setDisabled] = useState(true)
	const [isImageClicked, setIsImageClicked] = useState(false)

	const handleImageClick = () => {
		setIsImageClicked(true)
		console.log(isPostLiked)
		if (!isPostLiked) {
			axios.patch(`${apiUrl}/post/like/${_id}`)
			setIsPostLiked(true)
			likes.push(1)
		}
	}

	const handleHeartClick = () => {
		setAuthToken(localStorage.getItem("accessToken"))
		setIsPostLiked(!isPostLiked)
		if (isPostLiked) {
			axios.patch(`${apiUrl}/post/unlike/${_id}`)
			likes.pop()
		} else {
			axios.patch(`${apiUrl}/post/like/${_id}`)
			likes.push(1)
		}
	}

	useEffect(() => {
		let imageTimer
		if (isImageClicked) {
			imageTimer = setTimeout(() => setIsImageClicked(false), 1500)
		}
		return () => clearTimeout(imageTimer)
	}, [isImageClicked])

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
									src="https://firebasestorage.googleapis.com/v0/b/instagram-ad6aa.appspot.com/o/Thomas.jpeg?alt=media&token=09c40ffd-5046-424f-935e-f01b9f676ab7"
									alt="lalisa"
								/>
							</a>
						</div>
						<div className="head-left-text">
							<a href="/">
								<span className="name">{authorName}</span>
							</a>
							<span className="head-left-text__location">
								{location}
							</span>
						</div>
					</div>
					<div className="button">
						<Dots />
					</div>
				</div>
				<div onDoubleClick={handleImageClick} className="Post__media">
					{isImageClicked && <LikePostHeart />}
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
								<div onClick={handleHeartClick}>
									{isPostLiked ? (
										<HeartRed />
									) : (
										<BigHeartOutline />
									)}
								</div>
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
							<span>{likes.length}</span> likes
						</a>
					</div>
					<div className="content">
						<p className="text">
							<a href="/">
								<span className="name">{authorName}</span>
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
							{comments.length > 0 && (
								<span>
									View all <span>10</span> comments
								</span>
							)}
						</div>
					</div>
					<div className="time">
						<span>{handleDate(createdAt)}</span>
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
