import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Pages and Components
import Home from './pages/Home'
import Layout from './components/Layout'
import CreateWorkout from './pages/CreateWorkout'

const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: [
			{ path: '/', Component: Home },
			{ path: '/create', Component: CreateWorkout },
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
