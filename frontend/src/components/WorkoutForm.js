import { useState } from 'react'

function WorkoutForm() {
	const [title, setTitle] = useState('')
	const [load, setLoad] = useState('')
	const [reps, setReps] = useState('')
	const [error, setError] = useState(null)

	const handleSubmit = async (e) => {
		e.preventDefault()

		const workout = { title, load, reps }

		const response = await fetch('/api/workouts', {
			method: 'POST',
			body: JSON.stringify(workout),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const json = await response.json()

		if (!response.ok) {
			setError(json.error)
		}
		if (response.ok) {
			setTitle('')
			setLoad('')
			setReps('')
			setError(null)
			console.log('New workout added', json)
		}
	}

	return (
		<form className='form' onSubmit={handleSubmit}>
			<h1>Add a New Workout</h1>
			<input
				type='text'
				name='name'
				className='input'
				placeholder='Workout Name'
				onChange={(e) => setTitle(e.target.value)}
				value={title}
			/>

			<input
				type='text'
				name='load'
				className='input'
				placeholder='Load (in KG)'
				onChange={(e) => setLoad(e.target.value)}
				value={load}
			/>

			<input
				type='text'
				name='reps'
				className='input'
				placeholder='Repetitions'
				onChange={(e) => setReps(e.target.value)}
				value={reps}
			/>

			<button className='btn'>Add Workout</button>
		</form>
	)
}

export default WorkoutForm
