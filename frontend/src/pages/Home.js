import { useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutContext } from '../hooks/useWorkoutContext'
import {useAuthContext} from '../hooks/useAuthContext'

function Home() {
	const { workouts, dispatch } = useWorkoutContext()
	const {user} = useAuthContext()

	useEffect(() => {
		const fetchWorkouts = async () => {
			const response = await fetch('/api/workouts', {
				headers: {
					'Authorization': `Bearer ${user.token}`
				}
			})
			const json = await response.json()

			if (response.ok) {
				dispatch({ type: 'SET_WORKOUTS', payload: json })
			}
		}
		if(user){
			fetchWorkouts()
		}
		
	}, [dispatch, user])

	return (
		<div className='home flex flex-row'>
			<div className='workouts w-full m-5 flex justify-start items-center flex-wrap'>
				{workouts &&
					workouts.map((workout) => (
						<WorkoutDetails key={workout._id} workout={workout} />
					))}
			</div>
			<div className='create mt-6'>
				<WorkoutForm />
			</div>
		</div>
	)
}

export default Home
