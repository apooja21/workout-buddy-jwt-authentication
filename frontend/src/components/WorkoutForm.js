import { useState } from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext'

function WorkoutForm() {
	const { dispatch } = useWorkoutContext()
	const [title, setTitle] = useState('')
	const [load, setLoad] = useState('')
	const [reps, setReps] = useState('')
	const [targetArea, setTargetArea] = useState('')
	const [error, setError] = useState(null)
	const [emptyFields, setEmptyFields] = useState([])

	const handleSubmit = async (e) => {
		e.preventDefault()

		const workout = { title, load, reps, targetArea }

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
			setEmptyFields(json.emptyFields)
		}
		if (response.ok) {
			setTitle('')
			setLoad('')
			setReps('')
			setTargetArea('')
			setError(null)
			setEmptyFields([])
			console.log('New workout added', json)
			dispatch({ type: 'CREATE_WORKOUT', payload: json })
		}
	}

	return (
		<form className='form' onSubmit={handleSubmit}>
			<h1>Add a New Workout</h1>
			<input
				type='text'
				name='name'
				className={emptyFields.includes('title') ? 'error' : ''}
				placeholder='Workout Name'
				onChange={(e) => setTitle(e.target.value)}
				value={title}
			/>

			<input
				type='number'
				name='load'
				className={emptyFields.includes('load') ? 'error' : ''}
				placeholder='Load (in KG)'
				onChange={(e) => setLoad(e.target.value)}
				value={load}
			/>

			<input
				type='number'
				name='reps'
				className={emptyFields.includes('reps') ? 'error' : ''}
				placeholder='Repetitions'
				onChange={(e) => setReps(e.target.value)}
				value={reps}
			/>
			<input
				type='text'
				name='targetArea'
				className={emptyFields.includes('targetArea') ? 'error' : ''}
				placeholder='Target Area'
				onChange={(e) => setTargetArea(e.target.value)}
				value={targetArea}
			/>

			<button className='btn'>Add Workout</button>
			{error && <div className='error-warning'>{error}</div>}
		</form>
	)
}

export default WorkoutForm
