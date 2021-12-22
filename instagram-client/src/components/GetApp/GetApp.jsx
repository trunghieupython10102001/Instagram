import './GetApp.scss'

export default function GetApp() {
	return (
		<div className='GetApp'>
			<p className="GetApp-text">Get the app.</p>	
			<div className="GetApp-btn">
				<a href="/" className="GetApp-btn-link">
					<img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" />
				</a>
				<a href="/" className="GetApp-btn-link">
					<img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" />
				</a>
			</div>
		</div>
	)
}
