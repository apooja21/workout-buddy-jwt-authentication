function WorkoutDetails({ workout }) {
	return (
		<div className='workout-card'>
			<div className='card-header'>
				<img
					src='https://source.unsplash.com/1600x1000/?workout'
					class='workout-img'
					alt=''
				/>
			</div>
			<h2>{workout.title}</h2>
			<p className='workout-details'>
				<strong>Load (kg): </strong>
				{workout.load}
			</p>
			<p className='workout-details'>
				<strong>Repetitions: </strong>
				{workout.reps}
			</p>
			<span className='workout-details'>{workout.createdAt}</span>
		</div>
	)
}

export default WorkoutDetails
