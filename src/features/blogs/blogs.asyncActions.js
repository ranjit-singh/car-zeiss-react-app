import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

const fetchAllBlogs = createAsyncThunk(
	'posts/getAll',
	async ({ useCaching, noBusySpinner }, thunkArgs) =>
		await doAsync({
			url: 'posts',
			useCaching,
			noBusySpinner,
			successMessage: 'Posts loaded',
			errorMessage: 'Unable to load posts. Please try again later.',
			...thunkArgs,
		})
)

const blogPost = createAsyncThunk(
	'posts',
	async ({ useCaching, noBusySpinner, payload }, thunkArgs) =>
		await doAsync({
			url: 'posts',
			httpMethod: 'post',
			httpConfig: {
				body: payload,
			},
			useCaching,
			noBusySpinner,
			successMessage: 'Blog Post successfully.',
			errorMessage: 'Unable to post blog. Please try again later.',
			...thunkArgs,
		})
)

export { fetchAllBlogs, blogPost }
