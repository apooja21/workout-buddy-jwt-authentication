import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
	return (
		<>
			<Navbar />
			<div className='pages'>
				<Outlet />
			</div>
		</>
	)
}

export default Layout
