import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { useDropzone } from "react-dropzone"
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage"
import { storage } from "../../config/firebase"
import Modal from "../Modal/Modal"
import SelectImage from "../SelectImage/SelectImage"
import "./CreatePost.scss"
import ImagePreview from "../ImagePreview/ImagePreview"
import CreatePostContent from "../CreatePostContent/CreatePostContent"
import { BackIcon } from "../Icons/BackIcon"
import Discardpost from "../DiscardPost/DiscardPost"
import { CaretLeft } from "../Icons/CaretLeft"
import { CaretRight } from "../Icons/CaretRight"
import setAuthToken from "../../utils/setAuthToken"
import { apiUrl } from "../../contexts/constants"
import Uploadloading from "../UploadLoading/UploadLoading"

const Createpost = () => {
	const [files, setFiles] = useState([])
	const [wantClose, setWantClose] = useState(false)
	const [isCreate, setIsCreate] = useState(false)
	const [share, setShare] = useState({
		sharing: false,
		shared: false,
	})
	const [imageLinks, setImageLinks] = useState([])
	const [currentImage, setCurrentImage] = useState(0)
	const [size, setSize] = useState({
		width: isCreate ? 941 : 601,
		maxWidth: isCreate ? 1195 : 855,
		maxHeight: isCreate ? 642 : 898,
		minWidth: isCreate ? 688 : 348,
	})
	const navigate = useNavigate()
	const contentRef = useRef()

	const callUploadPostApi = async (data) => {
		if (localStorage.getItem("accessToken")) {
			setAuthToken(localStorage.getItem("accessToken"))
		}
		try {
			const response = await axios({
				method: "POST",
				url: "/post/create",
				baseURL: apiUrl,
				headers: {
					"Content-Type": "application/json",
				},
				data: JSON.stringify(data),
			})

			if (response.data.success) {
				console.log(response.data)
			}
			return response.data
		} catch (error) {
			console.log(error)
		}
	}

	const uploadFiles = (file, index, length) => {
		if (!file) return
		const storageRef = ref(storage, `/images/${file.name}${uuidv4()}`)
		const uploadTask = uploadBytesResumable(storageRef, file)

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const prog = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				)
				if (index === length - 1 && prog === 100) {
				}
			},
			(err) => console.log(err),
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((url) => {
					setImageLinks((prev) => [...prev, url])
				})
			}
		)
	}

	useEffect(() => {
		if (
			files.length > 0 &&
			imageLinks.length === files.length &&
			!share.shared
		) {
			const data = {
				images: imageLinks,
				content: contentRef.current.getContent(),
				location: contentRef.current.getLocation(),
			}

			callUploadPostApi(data).then((data) => {
				setShare({
					...share,
					shared: true,
					sharing: false,
				})
				setIsCreate(false)
			})
		}
	}, [imageLinks, files, contentRef, share])

	const handleUploadPost = () => {
		setShare({
			...share,
			sharing: true,
		})
		setSize({
			width: 601,
			maxWidth: 855,
			maxHeight: 898,
			minWidth: 348,
		})
		files.forEach((file, index, array) => {
			uploadFiles(file, index, array.length)
		})
	}

	const handleClose = () => {
		if (isCreate) {
			setWantClose(true)
		} else {
			setFiles([])
			setIsCreate(false)
			navigate("/")
		}
	}

	const handleDiscard = () => {
		setFiles([])
		setIsCreate(false)
		navigate("/")
	}

	const handleCancel = () => {
		setWantClose(false)
	}

	const handleBack = () => {
		setWantClose(true)
	}

	// const handleAvatarClick = () => {}

	const { getRootProps, getInputProps } = useDropzone({
		accept: "image/*, video/*",
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			)
			setIsCreate(true)
			setSize({
				width: 941,
				maxWidth: 1195,
				maxHeight: 642,
				minWidth: 688,
			})
		},
	})

	const handleNextImage = (e) => {
		setCurrentImage(currentImage + 1)
	}

	const handleBackImage = (e) => {
		setCurrentImage(currentImage - 1)
	}

	const handleResize = () => {
		if (!isCreate) {
			if (window.innerWidth < 855 + 372) {
				setSize({
					...size,
					maxWidth: window.innerWidth - 372,
					maxHeight: window.innerWidth - 329,
				})
			} else {
				if (window.innerWidth < 1195 + 32) {
					setSize({
						...size,
						maxWidth: 855,
						maxHeight: 898,
					})
				}
			}
		} else {
			setSize({
				...size,
				maxWidth: window.innerWidth - 32,
			})
		}
	}

	useEffect(() => {
		window.addEventListener("resize", handleResize)

		return () => {
			return window.removeEventListener("resize", handleResize)
		}
	})

	const handleCreatePostClick = (e) => {
		e.stopPropagation()
	}

	return (
		<Modal handleClose={handleClose} close={true} opacity={0.85}>
			<div onClick={handleCreatePostClick} className="CreatePost">
				{wantClose && (
					<Discardpost
						handleCancel={handleCancel}
						handleDiscard={handleDiscard}
					/>
				)}

				<div className="CreatePost-container">
					<div
						style={{
							maxWidth: size.maxWidth,
							maxHeight: size.maxHeight,
							width: size.width,
							minWidth: size.minWidth,
						}}
						className="CreatePost-container-2"
					>
						<div className="CreatePost-main-container">
							<div className="head">
								<div className="head-container">
									{isCreate &&
										!(share.shared || share.sharing) && (
											<div className="head-button">
												<button
													onClick={handleBack}
													className="back-btn"
												>
													<BackIcon />
												</button>
											</div>
										)}
									<h1 className="head-title">
										Create new post
									</h1>
									{isCreate &&
										!(share.shared || share.sharing) && (
											<div
												onClick={handleUploadPost}
												className="head-button"
											>
												<button className="share-btn">
													Share
												</button>
											</div>
										)}
								</div>
							</div>
							{(share.sharing || share.shared) && (
								<div
									style={{
										width: size.maxWidth,
										height: size.maxWidth,
									}}
									className="main-container-left"
								>
									<Uploadloading share={share} />
								</div>
							)}
							<div
								style={
									share.shared || share.sharing
										? {
												display: "none",
										  }
										: {}
								}
								className="main-container"
							>
								<div
									style={
										isCreate
											? {
													width: size.maxWidth - 340,
													height: size.maxWidth - 340,
											  }
											: {}
									}
									className="main-container-left"
								>
									{currentImage > 0 && files.length > 0 && (
										<CaretLeft
											handleBackImage={handleBackImage}
										/>
									)}
									{currentImage < files.length - 1 && (
										<CaretRight
											handleNextImage={handleNextImage}
										/>
									)}

									{!files[0] && (
										<SelectImage
											getRootProps={getRootProps}
											getInputProps={getInputProps}
										/>
									)}
									{files[0] && (
										<ImagePreview
											src={files[currentImage].preview}
										/>
									)}
								</div>
								{isCreate && (
									<CreatePostContent ref={contentRef} />
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	)
}

export default Createpost
