import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { login, error, isLoading } = useLogin()

	const handleSubmit = async (e) => {
		e.preventDefault()
		await login(email, password)
	}

	return (
		<form
			className='login flex flex-col  w-96 items-center p-6 mx-auto my-6 text-center rounded-2xl'
			onSubmit={handleSubmit}>
			<h3 className='text-xl text-paris-m text-2xl font-bold mb-4'>Login</h3>

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

			<button
				disabled={isLoading}
				className='btn bg-paris-m text-white px-7 py-3 rounded-3xl text-lg font-medium'>
				Login
			</button>
			{error && <div className='error'>{error}</div>}
		</form>
	)
}

export default Login
