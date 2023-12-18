import { useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutContext } from '../hooks/useWorkoutContext'

function Home() {
	const { workouts, dispatch } = useWorkoutContext()

	useEffect(() => {
		const fetchWorkouts = async () => {
			const response = await fetch('/api/workouts')
			const json = await response.json()

			if (response.ok) {
				dispatch({ type: 'SET_WORKOUTS', payload: json })
			}
		}
		fetchWorkouts()
	}, [dispatch])

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
