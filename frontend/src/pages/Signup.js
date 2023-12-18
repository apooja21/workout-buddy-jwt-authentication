import { useState } from 'react'

const Signup = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(email, password)
	}

	return (
		<form
			className='login flex flex-col bg-victoria w-96 items-center p-6 mx-auto my-6 text-center rounded-2xl'
			onSubmit={handleSubmit}>
			<h3 className='text-xl text-white text-2xl font-bold mb-4'>Sign Up</h3>

			<input
				type='email'
				placeholder='Email'
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				className='w-72 px-6 py-3 text-lg rounded-3xl mb-4'
			/>

			<input
				type='password'
				placeholder='Password'
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				className='w-72 px-6 py-3 text-lg rounded-3xl mb-4'
			/>

			<button className='btn bg-paris-m text-white px-7 py-3 rounded-3xl text-lg font-medium'>
				Sign Up
			</button>
		</form>
	)
}

export default Signup
