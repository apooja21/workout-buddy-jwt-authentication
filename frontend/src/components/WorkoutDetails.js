import { useWorkoutContext } from '../hooks/useWorkoutContext'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function WorkoutDetails({ workout }) {
	const { dispatch } = useWorkoutContext()

	const handleClick = async () => {
		const response = await fetch('/api/workouts/' + workout._id, {
			method: 'DELETE',
		})
		const json = await response.json()
		if (response.ok) {
			dispatch({ type: 'DELETE_WORKOUT', payload: json })
		}
	}

	return (
		<div className='workout-card'>
			<div className='card-header'>
				<img
					src='https://source.unsplash.com/1600x1000/?workouts'
					className='workout-img'
					alt=''
				/>
				<span className='workout-details'>
					{formatDistanceToNow(new Date(workout.createdAt), {
						addSuffix: true,
					})}
				</span>
			</div>
			<div className='details'>
				<h2>{workout.title}</h2>
				<p className='workout-details'>
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
				<button className='delete' onClick={handleClick}>
					Delete
				</button>
			</div>
		</div>
	)
}

export default WorkoutDetails
