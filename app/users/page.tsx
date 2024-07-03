interface User {
	id: number;
	name: string;
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
			<p>{now}</p>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</>
	);
};

export default UsersPage;
