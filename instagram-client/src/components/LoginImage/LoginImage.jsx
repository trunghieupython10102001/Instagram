import { useEffect, useState } from 'react'
import clsx from 'clsx'
import './LoginImage.scss'

export default function LoginImage() {
	const [index, setIndex] = useState(1)

	useEffect(() => {
		// if (index === 5) {
		// 	setIndex(1)
		// }
		const timerId = setTimeout(() => {
			if (index === 5) {
				setIndex(1)
				return 
			} else {
				setIndex(index + 1)
				return 
			}
		}, 5000)
		return () => {
			clearInterval(timerId)
		}
	}, [index])

	return (
		<div className='LoginImage'>
			<div className="background">
				<img className={clsx(index === 1 && 'float', index === 2 && 'display')} src="https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg" alt="" />
				<img className={clsx(index === 2 && 'float', index === 3 && 'display')} src="https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg" alt="" />
				<img className={clsx(index === 3 && 'float', index === 4 && 'display')} src="https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg" alt="" />
				<img className={clsx(index === 4 && 'float', index === 5 && 'display')} src="https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg" alt="" />
				<img className={clsx(index === 5 && 'float', index === 1 && 'display')} src="https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg" alt="" />
			</div>
		</div>
	)
}
