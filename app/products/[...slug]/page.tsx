interface Props {
	params: { slug: string[] };
}

const ProductDetailPage = ({ params: { slug } }: Props) => {
	return <div>ProductDetailPage {slug}</div>;
};

export default ProductDetailPage;
