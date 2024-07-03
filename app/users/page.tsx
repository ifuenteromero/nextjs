interface User {
	id: number;
	name: string;
}

const UsersPage = async () => {
	const endpoint = 'https://jsonplaceholder.typicode.com/users';

	const res = await fetch(
		endpoint,
		// {
		// 	next: {
		// 		revalidate: 10,
		// 	},
		// }
		{ cache: 'no-store' } // always fresh data
	);
	const users: User[] = await res.json();
	return (
		<>
			<h1>User List</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</>
	);
};

export default UsersPage;
