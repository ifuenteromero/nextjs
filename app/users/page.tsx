interface User {
	id: number;
	name: string;
	email: string;
}

const UsersPage = async () => {
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

	const now = new Date().toLocaleTimeString();
	return (
		<>
			<h1>User List</h1>
			<table className='table '>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr
							className='hover hover:cursor-pointer'
							key={user.id}
						>
							<td>{user.name}</td>
							<td>{user.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default UsersPage;
