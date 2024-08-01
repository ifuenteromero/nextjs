import prisma from '@/prisma/client';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
	params: {
		id: number;
	};
}

const UserDetailPage = ({ params: { id } }: Props) => {
	if (id > 10) notFound();
	return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;

export const generateMetadata = async ({
	params,
}: Props): Promise<Metadata> => {
	const id = params.id;
	const user = await prisma.user.findUnique({ where: { id: id.toString() } });
	return {
		title: `User ${user?.name}`,
		description: `User ${user?.name} details`,
	};
};
