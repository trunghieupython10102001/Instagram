import { useState } from "react"
import clsx from "clsx"
import { Link } from "react-router-dom"
import "./header.scss"
import { Home } from "../Icons/Home"
import { PlaneOutline } from "../Icons/PlaneOutline"
import { AddOutline } from "../Icons/AddOutline"
import { CompassOutline } from "../Icons/CompassOutline"
import { HeartOutline } from "../Icons/HeartOutline"
import UserFunctions from "../UserFunctions/UserFunctions"

export const Header = () => {
	const [hidden, setHidden] = useState(true)
	const handleAvatarClick = () => {
		setHidden(!hidden)
	}

	return (
		<nav className="Nav">
			<div className="Nav-container">
				<div className="Nav__right">
					<Link to="/">
						<div className="logo-container">
							<img
								src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
								alt="Instagram"
								className="logo"
							/>
						</div>
					</Link>
				</div>
				<div className="Nav__center">
					<div className="Nav__center-container">
						<input type="text" placeholder="Search" />
					</div>
				</div>
				<div className="Nav__left">
					<div className="Nav__left-container">
						<ul className="menu">
							<li>
								<Link to="/">
									<Home />
								</Link>
							</li>
							<li>
								<Link to="/">
									<PlaneOutline />
								</Link>
							</li>
							<li>
								<Link to="/create">
									<AddOutline />
								</Link>
							</li>
							<li>
								<Link to="/">
									<CompassOutline />
								</Link>
							</li>
							<li>
								<span>
									<HeartOutline />
								</span>
							</li>
							<li onClick={handleAvatarClick}>
								<span>
									<img
										className="avatar"
										src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/254549628_1532690087092725_503017275021991785_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ILiuaQl_WPoAX9OE-EY&_nc_ht=scontent.fhan5-6.fna&oh=00_AT8wprRlFwaV03ty4yeaNh7MesLaxDTqkZIwvEO88T2Rjw&oe=61C3633B"
										alt="avatar"
									/>
								</span>
								<div
									onClick={handleAvatarClick}
									className={clsx('modal', hidden && 'hidden')}
								></div>
								<UserFunctions hidden={hidden} />
								{/* <UserFunctions hidden={hidden}/> */}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}
