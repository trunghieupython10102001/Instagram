import Instagram from '../../images/instagram.png'
// import './Loading.scss'

export default function Loading() {
	return (
		<div style={{
			width: '100vw',
			height: '100vh',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}}>
			<img style={{
				width: 48,
				height: 48,
			}} src={Instagram} alt="logo" />
		</div>
	)
}
