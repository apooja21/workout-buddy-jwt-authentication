import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Pages and Components
import Home from './pages/Home'
import Layout from './components/Layout'

const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: [{ path: '/', Component: Home }],
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
