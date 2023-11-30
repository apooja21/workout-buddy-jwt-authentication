import { useContext } from 'react'
import { WorkoutContext } from '../context/WorkoutContext'

export const useWorkoutContext = () => {
	const context = useContext(WorkoutContext)
	if (!useContext(WorkoutContext)) {
		throw Error('useWorkoutsContext must be inside the WorkoutContextProvider')
	}
	return context
}
