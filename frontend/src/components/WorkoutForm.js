import { useState } from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext'
import { useAuthContext } from '../hooks/useAuthContext'

function WorkoutForm() {
	const { dispatch } = useWorkoutContext()
	const [title, setTitle] = useState('')
	const [load, setLoad] = useState('')
	const [reps, setReps] = useState('')
	const [targetArea, setTargetArea] = useState('')
	const [error, setError] = useState(null)
	const [emptyFields, setEmptyFields] = useState([])
	const {user} = useAuthContext()

	const handleSubmit = async (e) => {
		e.preventDefault()
		if(!user){
			setError('You must be logged in')
			return
		}

		const workout = { title, load, reps, targetArea }

		const response = await fetch('/api/workouts', {
			method: 'POST',
			body: JSON.stringify(workout),
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${user.token}`
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
		<form
			className='form flex flex-col w-96 sticky top-12 mx-10 my-5 p-6 items-center text-center rounded-xl'
			onSubmit={handleSubmit}>
			<h1 className='mb-5 text-xl font-bold text-paris-m'>Add New Workout</h1>
			<input
				type='text'
				name='name'
				className={`w-64 border border-solid border-paris-m rounded-md px-2.5 py-1 mb-3 border-box ${
					emptyFields.includes('title') ? 'error' : ''
				}`}
				placeholder='Workout Name'
				onChange={(e) => setTitle(e.target.value)}
				value={title}
			/>

			<input
				type='number'
				name='load'
				className={`w-64 border border-solid border-paris-m rounded-md px-2.5 py-1 mb-3 border-box ${
					emptyFields.includes('load') ? 'error' : ''
				}`}
				placeholder='Load (in KG)'
				onChange={(e) => setLoad(e.target.value)}
				value={load}
			/>

			<input
				type='number'
				name='reps'
				className={`w-64 border border-solid border-paris-m rounded-md px-2.5 py-1 mb-3 border-box ${
					emptyFields.includes('reps') ? 'error' : ''
				}`}
				placeholder='Repetitions'
				onChange={(e) => setReps(e.target.value)}
				value={reps}
			/>
			<input
				type='text'
				name='targetArea'
				className={`w-64 border border-solid border-paris-m rounded-md px-2.5 py-1 mb-3 border-box ${
					emptyFields.includes('targetArea') ? 'error' : ''
				}`}
				placeholder='Target Area'
				onChange={(e) => setTargetArea(e.target.value)}
				value={targetArea}
			/>

			<button className='btn bg-paris-m text-white p-3 rounded-md text-sm'>
				Add Workout
			</button>
			{error && <div className='error-warning bg-paris-m/50 mt-3 px-1.5 py-1 rounded-md text-white'>{error}</div>}
		</form>
	)
}

export default WorkoutForm
