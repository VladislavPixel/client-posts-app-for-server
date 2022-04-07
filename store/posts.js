import { createSlice } from "@reduxjs/toolkit"
import postsService from "../services/posts.service"

const initialState = {
	data: {},
	lengthValue: null,
	errorUpdate: null
}

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postsReceived(state, action) {
			const idPage = action.payload.currentPage
			if (!(idPage in state.data)) {
				state.data[idPage] = action.payload.data
			}
		},
		postsLengthValueReceived(state, action) {
			state.lengthValue = action.payload
		},
		postUpdated(state, action) {
			const groupArray = state.data[action.payload.post.group]
			const newArray = groupArray.map(item => {
				if (item.id === action.payload.post.id) {
					return { ...item, description: action.payload.newDescription }
				}
				return item
			})
			state.data[action.payload.post.group] = newArray
		},
		postUpdateRequested(state) {
			state.errorUpdate = null
		},
		postUpdateRequestField(state, action) {
			state.errorUpdate = action.payload
		}
	}
})

const { actions, reducer: postsReducer } = postsSlice
const { postsReceived, postsLengthValueReceived, postUpdated, postUpdateRequested, postUpdateRequestField } = actions

// Actions
export function setPostsData(data, currentPage) {
	return (dispatch) => {
		dispatch(postsReceived({ data, currentPage }))
	}
}
export function setLengthValue(data) {
	return (dispatch) => {
		dispatch(postsLengthValueReceived(data))
	}
}
export function updateElementPost(post, newDescription) {
	return async (dispatch, getState) => {
		dispatch(postUpdateRequested())
		try {
			await postsService.updatePost({ ...post, description: newDescription })
			if (getState().posts.data[post.group]) dispatch(postUpdated({ post, newDescription }))
		} catch (err) {
			const { message } = err
			dispatch(postUpdateRequestField(message))
			throw err
		}
	}
}

// Selectors
export const getDataPosts = (idPage) => {
	return (state) => {
		return state.posts.data[idPage]
	}
}
export const getLengthAll = () => {
	return (state) => {
		return state.posts.lengthValue
	}
}
export const getKeysArrayData = () => {
	return (state) => {
		const arrKeys = Object?.keys(state.posts?.data)
		return arrKeys
	}
}
export const getAllData = () => {
	return (state) => {
		return state.posts.data
	}
}

export default postsReducer
