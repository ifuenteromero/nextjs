import { sort } from 'fast-sort';
import Link from 'next/link';

interface User {
	id: number;
	name: string;
	email: string;
}

interface Props {
	sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
	const endpoint = 'https://jsonplaceholder.typicode.com/users';

	// RENDERING => CLIENT SIDE O SERVER SIDE
	// SERVER SIDE RENDERING CAN BE => STATIC (at build time) or dynamic (at request time)

	const res = await fetch(
		endpoint
		// {
		// 	next: {
		// 		revalidate: 10,
		// 	},
		// }
		// { cache: 'no-store' } // always fresh data
	);
	const users: User[] = await res.json();
	const sortedUsers = sort(users).asc((u) =>
		sortOrder === 'email' ? u.email : u.name
	);
	return (
		<table className='table '>
			<thead>
				<tr>
					<th>
						<Link href='/users?sortOrder=name'>Name</Link>
					</th>
					<th>
						<Link href='/users?sortOrder=email'>Email</Link>
					</th>
				</tr>
			</thead>
			<tbody>
				{sortedUsers.map((user) => (
					<tr className='hover hover:cursor-pointer' key={user.id}>
						<td>{user.name}</td>
						<td>{user.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default UserTable;
