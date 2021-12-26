import Heart from "../../images/heart.png"
import "./LikePostHeart.scss"

export default function LikePostHeart() {
	return (
		<div className="LikePostHeart">
			<div className="LikePostHeart-container">
				<img src={Heart} alt="" />
			</div>
		</div>
	)
}
