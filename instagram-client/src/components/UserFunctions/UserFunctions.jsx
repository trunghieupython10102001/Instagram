import "./UserFunctions.scss"
import clsx from 'clsx'
import { Link } from "react-router-dom"
import { UserIcon } from "../Icons/UserIcon"
import { SaveIcon } from "../Icons/SaveIcon"
import { SettingIcon } from "../Icons/SettingIcon"
import { SwitchIcon } from "../Icons/SwitchIcon"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
export default function UserFunctions({hidden}) {
	const { callLogout } = useContext(AuthContext)

	const handleLogout = () => {
		callLogout()
	}

	return (
		<div className={clsx('UserFunctions', hidden && 'hidden')}>
			<div className="arrow"></div>
			<ul className="UserFunctions-list">
				<li className="UserFunctions-list__item">
					<Link to="/" className="UserFunctions-list__item-link">
						<span className="icon">
							<UserIcon />
						</span>
						<span className="text">Profile</span>
					</Link>
				</li>
				<li className="UserFunctions-list__item">
					<Link to="/" className="UserFunctions-list__item-link">
						<span className="icon">
							<SaveIcon />
						</span>
						<span className="text">Saved</span>
					</Link>
				</li>
				<li className="UserFunctions-list__item">
					<Link to="/" className="UserFunctions-list__item-link">
						<span className="icon">
							<SettingIcon />
						</span>
						<span className="text">Settings</span>
					</Link>
				</li>
				<li className="UserFunctions-list__item">
					<Link to="/" className="UserFunctions-list__item-link">
						<span className="icon">
							<SwitchIcon />
						</span>
						<span className="text">Switch Accounts</span>
					</Link>
				</li>
				<li onClick={handleLogout} className="UserFunctions-list__item">
					<div className="button">
						<button>Log Out</button>
					</div>
				</li>
			</ul>
		</div>
	)
}
