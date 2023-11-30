function WorkoutDetails({ workout }) {
	return (
		<div className='workout-card'>
			<div className='card-header'>
				<img
					src='https://source.unsplash.com/1600x1000/?fitness'
					className='workout-img'
					alt=''
				/>
				<span className='workout-details'>{workout.createdAt}</span>
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
			</div>
		</div>
	)
}

export default WorkoutDetails
