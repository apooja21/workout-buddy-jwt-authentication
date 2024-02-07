import { useAuthContext } from './useAuthContext'
import { useWorkoutContext } from './useWorkoutContext'

export const useLogout = () => {
	const { dispatch } = useAuthContext()
	const { dispatch: workoutDispatch } = useWorkoutContext()

	const logout = () => {
		//remove user from storage
		localStorage.removeItem('user')

		//update the auth context
		dispatch({ type: 'LOGOUT' })
		workoutDispatch({type: 'SET_WORKOUTS', payload:null})
	}
	return { logout }
}