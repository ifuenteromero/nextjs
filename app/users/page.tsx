interface User {
	id: number;
	name: string;
}

const UsersPage = async () => {
	const endpoint = 'https://jsonplaceholder.typicode.com/users';
	const users: User[] = await fetch(endpoint).then((res) => res.json());
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
