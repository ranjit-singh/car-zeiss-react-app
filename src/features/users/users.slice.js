import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './users.asyncActions'

const initialState = {
	allUsers: [],
	filter: '',
}

const slice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		// synchronous actions
		updateFilter(state, action) {
			state.filter = action.payload
		},
	},
	extraReducers: {
		[asyncActions.fetchAllUsers.fulfilled]: (state, action) => {
			state.allUsers = action.payload
		},
	},
})

export default slice

export const { name, actions, reducer } = slice
