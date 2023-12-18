import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<header className='bg-petite-orchid '>
			<div className='container mx-auto py-3 px-15 flex justify-between '>
				<Link to='/' className='text-paris-m font-bold'>
					<h2 className='text-lg'>Workout Buddy</h2>
				</Link>
				<nav>
					<div className='nav_list flex flex-row gap-3'>
						<Link to='/login' className='text-paris-m font-medium'>
							Login
						</Link>
						<Link to='/signup' className='text-paris-m font-medium'>
							SignUp
						</Link>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Navbar
