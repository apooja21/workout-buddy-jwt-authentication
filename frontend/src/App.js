import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Pages and Components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Layout from './components/Layout'

const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: [
			{ path: '/', Component: Home },
			{ path: '/login', Component: Login },
			{ path: '/signup', Component: Signup },
		],
	},
])

function App() {
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
