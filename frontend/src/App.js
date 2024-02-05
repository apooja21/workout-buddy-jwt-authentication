import {Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import { useAuthContext} from './hooks/useAuthContext'
//Pages and Components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'



/* const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: [
			
			{ path: '/', loader: RequireAuth, Component: Home },
			{ path: '/login', Component: Login },
			{ path: '/signup', Component: Signup },
		],
	},
]) */


function App() {
	const {user} = useAuthContext();


	return (
		<div className='App'>
			<BrowserRouter>
			<Navbar />
				<div className='pages'>
					<Routes>
						<Route path='/' element= {user ? <Home /> : <Navigate to='/login'  />}/>
						<Route path='/login' element={!user ? <Login /> : <Navigate to='/' /> }  />
						<Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />} />
					</Routes>
				</div>
				
			</BrowserRouter>
		</div>
	)
}

export default App
