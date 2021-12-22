import './Footer.scss'

export default function Footer() {
	return (
		<div className='Footer'>
			<div className="container">
				<ul className="functions">
					<li className="item"><a href="/" className="item-link">About</a></li>
					<li className="item"><a href="/" className="item-link">Help</a></li>
					<li className="item"><a href="/" className="item-link">Press</a></li>
					<li className="item"><a href="/" className="item-link">API</a></li>
					<li className="item"><a href="/" className="item-link">Jobs</a></li>
					<li className="item"><a href="/" className="item-link">Privacy</a></li>
					<li className="item"><a href="/" className="item-link">Terms</a></li>
					<li className="item"><a href="/" className="item-link">Locations</a></li>
					<li className="item"><a href="/" className="item-link">Top Accounts</a></li>
					<li className="item"><a href="/" className="item-link">Hashtags</a></li>
					<li className="item"><a href="/" className="item-link lang">Language</a></li>
				</ul>
			</div>
			<span className="copyright">© 2021 Instagram from Meta</span>
		</div>
	)
}
