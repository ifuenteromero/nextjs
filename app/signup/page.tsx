// Create a custom registration form that captures user’s name, email, and password. Make sure these values are stored in the database.
'use client';

import { FormEvent } from 'react';

const RegisterUser = () => {
	const inputClassName = 'flex gap-3 items-center justify-between';

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget as HTMLFormElement;
		const name = form.name.value;
		console.log({ name });
	};

	return (
		<form
			className='flex flex-col gap-2 max-w-lg mx-auto'
			onSubmit={handleSubmit}
		>
			<div className={inputClassName}>
				<label htmlFor='name'>Name</label>
				<input
					id='name'
					type='text'
					placeholder='John'
					className='input input-bordered w-full max-w-xs'
				/>
			</div>
			<div className={inputClassName}>
				<label htmlFor='email'>Email</label>
				<input
					id='email'
					type='email'
					placeholder='john@gmail.com'
					className='input input-bordered w-full max-w-xs'
				/>
			</div>
			<div className={inputClassName}>
				<label htmlFor='password'>Password</label>
				<input
					id='password'
					type='password'
					className='input input-bordered w-full max-w-xs'
				/>
			</div>
			<div className={inputClassName}>
				<label htmlFor='confirm-password'>Repeat password</label>
				<input
					id='confirm-password'
					type='password'
					className='input input-bordered w-full max-w-xs'
				/>
			</div>
			<button type='submit' className='btn btn-primary self-center mt-2'>
				Register
			</button>
		</form>
	);
};

export default RegisterUser;
