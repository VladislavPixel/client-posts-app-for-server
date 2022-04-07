import { createSlice } from "@reduxjs/toolkit"
import localStorageService from "../services/localStorage.service"
import authService from "../services/auth.service"

const initialState = {
	isAuth: false,
	id: null,
	authUserName: null,
	error: null
}

const userAuthSlice = createSlice({
	name: "userAuth",
	initialState,
	reducers: {
		userAuthRequested(state) {
			state.isAuth = false
			state.error = null
		},
		userAuthReceived(state, action) {
			state.isAuth = true
			state.id = action.payload.ID
			state.authUserName = action.payload.Username
		},
		userAuthSet(state, action) {
			state.isAuth = true
			state.id = action.payload.idUser
			state.authUserName = action.payload.nameUser
		},
		userAuthRequestField(state, action) {
			state.error = action.payload
		},
		removedAuthUser(state) {
			state.isAuth = false
			state.id = null
			state.authUserName = null
		}
	}
})

const { actions, reducer: userAuthReducer } = userAuthSlice
const { userAuthRequested, userAuthReceived, userAuthRequestField, userAuthSet, removedAuthUser } = actions

// Actions
export function userSignIn(dataUser) {
	return async (dispatch) => {
		dispatch(userAuthRequested())
		try {
			const data = await authService.signIn(dataUser)
			localStorageService.setAuth(data)
			dispatch(userAuthReceived(data))
		} catch (err) {
			const { message } = err
			dispatch(userAuthRequestField(message))
		}
	}
}
export function setAuthUser() {
	return async (dispatch) => {
		const idUser = localStorageService.getId()
		const nameUser = localStorageService.getName()
		dispatch(userAuthSet({ idUser, nameUser }))
	}
}
export function removeAuthCurrentUser() {
	return (dispatch) => {
		localStorageService.removeAuth()
		dispatch(removedAuthUser())
	}
}

// Selectors
export const getValueIsAuthUser = () => {
	return (state) => {
		return state.userAuth.isAuth
	}
}
export const getNameAuthUser = () => {
	return (state) => {
		return state.userAuth.authUserName
	}
}

export default userAuthReducer
