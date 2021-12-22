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
							src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/254549628_1532690087092725_503017275021991785_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ILiuaQl_WPoAX9OE-EY&_nc_ht=scontent.fhan5-6.fna&oh=00_AT8wprRlFwaV03ty4yeaNh7MesLaxDTqkZIwvEO88T2Rjw&oe=61C3633B"
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
