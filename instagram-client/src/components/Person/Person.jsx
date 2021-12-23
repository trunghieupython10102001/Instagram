import './Person.scss'

const Person = ({name}) => {
	return (
		<div className='Person'>
			<div className="avatar">
				<img src="https://firebasestorage.googleapis.com/v0/b/instagram-ad6aa.appspot.com/o/Thomas.jpeg?alt=media&token=09c40ffd-5046-424f-935e-f01b9f676ab7" alt="" />
			</div>
			<div className="person-text">
				<p className="name"><a href="/">{name}</a></p>
				<p className="description">New to Instagram</p>
			</div>
			<div className="button">
				<button>Follow</button>
			</div>
		</div>
	);
}

export default Person;
