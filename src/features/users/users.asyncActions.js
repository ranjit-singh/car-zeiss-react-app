import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

export const fetchAllUsers = createAsyncThunk(
	'users/getAll',
	async ({ useCaching, noBusySpinner }, thunkArgs) =>
		await doAsync({
			url: 'users',
			useCaching,
			noBusySpinner,
			successMessage: 'Users loaded',
			errorMessage: 'Unable to load users. Please try again later.',
			...thunkArgs,
		})
)
