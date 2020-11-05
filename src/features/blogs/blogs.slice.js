import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './blogs.asyncActions'

const initialState = {
	allBlogs: [],
	filter: '',
}

const slice = createSlice({
	name: 'blogs',
	initialState,
	reducers: {
		// synchronous actions
		updateFilter(state, action) {
			state.filter = action.payload
		},
	},
	extraReducers: {
		[asyncActions.fetchAllBlogs.fulfilled]: (state, action) => {
			state.allBlogs = action.payload
		},
	},
})

export default slice

export const { name, actions, reducer } = slice
