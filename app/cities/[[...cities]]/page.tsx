interface Props {
	params: { cities: string[] };
}

const CityDetailPage = ({ params: { cities } }: Props) => {
	return <div>CityDetailPage {cities}</div>;
};

export default CityDetailPage;
