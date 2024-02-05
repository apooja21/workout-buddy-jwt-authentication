import { useWorkoutContext } from '../hooks/useWorkoutContext'
import { useAuthContext } from '../hooks/useAuthContext'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function WorkoutDetails({ workout }) {
	const { dispatch } = useWorkoutContext()
	const {user} = useAuthContext()

	const handleClick = async () => {
		if(!user){
			return
		}

		const response = await fetch('/api/workouts/' + workout._id, {
			method: 'DELETE',
			headers: {
				'Authorization': `Bearer ${user.token}`
			}
		})
		const json = await response.json()
		if (response.ok) {
			dispatch({ type: 'DELETE_WORKOUT', payload: json })
		}
	}

	return (
		<div className='workout-card border-solid border border-slate-300 w-80 m-5 p-2.5 rounded-2xl text-paris-m'>
			<div className='card-header relative'>
				<img
					src='https://source.unsplash.com/1600x1000/?workouts'
					className='workout-img w-full'
					alt=''
				/>
				<span className='workout-details absolute top-2 right-2.5 p-1 bg-paris-m/50 rounded-xl text-xs font-medium text-white'>
					{formatDistanceToNow(new Date(workout.createdAt), {
						addSuffix: true,
					})}
				</span>
			</div>
			<div className='details relative pt-2.5'>
				<h2 className='text-lg font-bold uppercase'>{workout.title}</h2>
				<p className='workout-details '>
					<strong>Load (kg): </strong>
					{workout.load}
				</p>
				<p className='workout-details'>
					<strong>Repetitions: </strong>
					{workout.reps}
				</p>
				<p className='workout-details'>
					<strong>Target Area: </strong>
					{workout.targetArea}
				</p>
				<button
					className='delete absolute p-2 top-3 right-0.5 bg-paris-m text-white rounded-3xl text-sm font-medium'
					onClick={handleClick}>
					Delete
				</button>
			</div>
		</div>
	)
}

export default WorkoutDetails
