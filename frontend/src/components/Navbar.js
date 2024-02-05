import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

function Navbar() {
	const { logout } = useLogout()
	const { user } = useAuthContext()

	const handleClick = () => {
		logout()
	}

	return (
		<header>
			<div className='container mx-auto py-3 px-15 flex justify-between items-center'>
				<Link to='/' className='text-paris-m font-bold'>
					<h2 className='text-lg'>Workout Buddy</h2>
				</Link>
				<nav className='flex flex-row gap-3 items-center'>
					{user && (
						<div className='text-paris-m font-medium'>
							<span className='mr-2 text-paris-m '>{user.email}</span>
							<button
								className='border-solid border-2 border-paris-m rounded-md p-1'
								onClick={handleClick}>
								Log Out
							</button>
						</div>
					)}
					{!user && (
						<div className='nav_list flex gap-7'>
							<Link to='/login' className='text-paris-m font-medium'>
								Login
							</Link>
							<Link to='/signup' className='text-paris-m font-medium'>
								SignUp
							</Link>
						</div>
					)}
				</nav>
			</div>
		</header>
	)
}

export default Navbar
