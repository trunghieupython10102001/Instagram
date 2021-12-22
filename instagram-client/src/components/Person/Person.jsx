import './Person.scss'

const Person = ({name}) => {
	return (
		<div className='Person'>
			<div className="avatar">
				<img src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/254549628_1532690087092725_503017275021991785_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ILiuaQl_WPoAX9OE-EY&_nc_ht=scontent.fhan5-6.fna&oh=00_AT8wprRlFwaV03ty4yeaNh7MesLaxDTqkZIwvEO88T2Rjw&oe=61C3633B" alt="" />
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
