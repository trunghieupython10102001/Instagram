import { useEffect, useState } from "react"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"
import { v4 as uuidv4 } from "uuid"
import { apiUrl } from "../../contexts/constants"
import setAuthToken from "../../utils/setAuthToken"
import Mainright from "../MainRight/MainRight"
import Post from "../Post/Post"
import "./Main.scss"

export const Main = () => {
	const limit = 3
	const [skip, setSkip] = useState(0)
	// const [posts, setPosts] = useState()
	const [posts, setPosts] = useState(() => {
		if (localStorage.getItem("accessToken")) {
			setAuthToken(localStorage.getItem("accessToken"))
		}
		axios.get(`${apiUrl}/post/${limit}/${skip}`).then((response) => {
			if (response.data.success) {
				setPosts(response.data.posts)
				setSkip(skip + 3)
			}
		})
	})

	// useEffect(() => {
	// 	getMorePost(limit, skip)
	// }, [])

	async function getMorePost(limit, skip) {
		if (localStorage.getItem("accessToken")) {
			setAuthToken(localStorage.getItem("accessToken"))
		}
		try {
			const response = await axios.get(`${apiUrl}/post/${limit}/${skip}`)
			if (response.data.success) {
				setPosts([...posts, ...response.data.posts])
				setSkip(skip + 3)
			}
			return response.data.posts
		} catch (error) {
			console.log(error)
		}
	}

	const [mainRightPos, setMainRightPos] = useState(
		() => (window.innerWidth - 935) / 2
	)

	const handleResize = () => {
		setMainRightPos((window.innerWidth - 935) / 2)
	}

	useEffect(() => {
		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return (
		<div className="Main">
			<div className="Main-container">
				<div className="Main__left">
					{posts && (
						<InfiniteScroll
							dataLength={posts.length}
							next={() => getMorePost(limit, skip)}
							hasMore={true}
							loader={<h4>Loading ...</h4>}
							endMessage={<h4>Ended</h4>}
						>
							{posts.map((post) => (
								<Post
									key={uuidv4()}
									post={post}
									// username={post.authorName}
									// content={post.content}
									// location={post.location}
									// images={post.images}
								/>
							))}
						</InfiniteScroll>
					)}
				</div>
				<div style={{ right: mainRightPos }} className="Main__right">
					<Mainright />
				</div>
			</div>
		</div>
	)
}
