import "./SelectImage.scss"
import { MediaIcon } from "../Icons/MediaIcon"
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn"

export default function SelectImage({ getRootProps, getInputProps }) {
	return (
		<div className="SelectImage">
			<div {...getRootProps()} className="SelectImage-container">
				<div className="SelectImage-dropzone">
					<input {...getInputProps()} />
					<div className="icon">
						<MediaIcon />
					</div>
					<div className="description">
						<h2 className="description-text">
							Drag photos and videos here
						</h2>
					</div>
					<PrimaryBtn name={"Select from computer"} />
				</div>
			</div>
		</div>
	)
}
