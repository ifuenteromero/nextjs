interface Props {
	params: {
		id: number;
		photoId: number;
	};
}

const PhotoDetailPage = ({ params: { photoId, id } }: Props) => {
	return (
		<div>
			User Id : {id} PhotoDetailPage {photoId}
		</div>
	);
};

export default PhotoDetailPage;
