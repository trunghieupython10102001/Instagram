import './ImagePreview.scss'

const Imagepreview = ({src}) => {
	return (
		<div className='ImagePreview'>
			<div className="ImagePreview-container">
				<img src={src} alt="preview" />
			</div>
		</div>
	);
}

export default Imagepreview;
