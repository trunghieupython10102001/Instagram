import { useContext } from "react"
import { v4 as uuidv4 } from "uuid"
import { AuthContext } from "../../contexts/AuthContext"
import Footer from "../Footer/Footer"
import Person from "../Person/Person"
import "./MainRight.scss"

const Mainright = () => {
	const people = ["thv", "j.m", "roses_are_rosie", "messi", "cr7"]

	const {
		authState: { user },
	} = useContext(AuthContext)

	return (
		<div className="MainRight">
			<div className="user-switch">
				<div className="avatar">
					<a href="/">
						<img
							src="https://firebasestorage.googleapis.com/v0/b/instagram-ad6aa.appspot.com/o/Thomas.jpeg?alt=media&token=09c40ffd-5046-424f-935e-f01b9f676ab7"
							alt=""
						/>
					</a>
				</div>
				<div className="name">
					<div className="insta-name">
						<a href="/">{user.username}</a>
					</div>
					<div className="fb-name">
						<span>{user.fullname}</span>
					</div>
				</div>
				<div className="switch">
					<button>Switch</button>
				</div>
			</div>
			<div className="suggestions">
				<div className="text">
					<span>Suggestions For You</span>
					<button>See All</button>
				</div>
				<div className="people">
					{people.map((person) => {
						return <Person key={uuidv4()} name={person} />
					})}
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Mainright
