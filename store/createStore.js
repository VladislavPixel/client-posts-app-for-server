import { configureStore, combineReducers } from "@reduxjs/toolkit"
import postsReducer from "./posts"
import userAuthReducer from "./userAuth"

const rootReducer = combineReducers({
	posts: postsReducer,
	userAuth: userAuthReducer
})

export default function createStore() {
	return configureStore({
		reducer: rootReducer
	})
}
