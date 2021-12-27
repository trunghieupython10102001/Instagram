import Modal from "../Modal/Modal"
import "./PostBoard.scss"
import { memo, useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import setAuthToken from "../../utils/setAuthToken"
import axios from "axios"
import { apiUrl } from "../../contexts/constants"

function PostBoard({ onBoardClick, authorId, postId }) {
	// const [deleteConfirm, setDeleteConfirm] = useState(false)
	
	const handleCancelClick = (e) => {
		if (e) {
			e.stopPropagation()
		}
		onBoardClick()
	}

	// delete post
	const handleDeleteClick = () => {
		if (localStorage.getItem("accessToken")) {
			setAuthToken(localStorage.getItem("accessToken"))
		}
		onBoardClick()
		try {
			axios.delete(`${apiUrl}/post/delete/${postId}`)
		} catch (error) {
			console.log(error)
		}
	}

	const {
		authState: {
			user: { _id },
		},
	} = useContext(AuthContext)

	const handlePostBoardClick = (e) => {
		e.stopPropagation()
	}

	return (
		<Modal handleClose={handleCancelClick} opacity={0.4}>
			<div onClick={handlePostBoardClick} className="PostBoard">
				<div className="PostBoard-container">
					{_id === authorId ? (
						<button
							onClick={handleDeleteClick}
							className="PostBoard-btn btn-primary"
						>
							Delete
						</button>
					) : (
						<>
							<button className="PostBoard-btn btn-primary">
								Report
							</button>
							<button className="PostBoard-btn btn-primary">
								Unfollow
							</button>
						</>
					)}

					<button className="PostBoard-btn">Go to post</button>
					<button className="PostBoard-btn">Share to...</button>
					<button className="PostBoard-btn">Copy Link</button>
					<button className="PostBoard-btn">Embed</button>
					<button
						onClick={handleCancelClick}
						className="PostBoard-btn"
					>
						Cancel
					</button>
				</div>
			</div>
		</Modal>
	)
}

export default memo(PostBoard)
