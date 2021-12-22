import './PrimaryBtn.scss'

export default function PrimaryBtn({name}) {
	return (
		<div className='PrimaryBtn'>
			<button className="btn-container">
				<div className="main">{name}</div>
			</button>
		</div>
	)
}
