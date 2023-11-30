import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<header>
			<div className='container'>
				<Link to='/'>
					<h2>Workout Buddy</h2>
				</Link>
				<Link to='/create'>
					<h4>Create</h4>
				</Link>
			</div>
		</header>
	)
}

export default Navbar
