import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

export const NOT_FOUND = 404
export const BAD_REQUEST = 400

export const logIn = createAsyncThunk(
	'userContext/logIn',
	async ({ email, password, useCaching, noBusySpinner } = {}, thunkArgs) => {
		const { stubSuccess, stubError } = fakeAuthentication(email, password)
		return await doAsync({
			url: 'login',
			httpConfig: {
				body: JSON.stringify({ userName: email, password }),
			},
			useCaching,
			noBusySpinner,
			successMessage: 'Logged In successful',
			errorMessage: `Unable to log in user. Error: ${
				stubError && stubError.statuscode
			}`,
			stubSuccess,
			stubError,
			...thunkArgs,
		})
	}
)

// Will create a request with either
// (1) stubSuccess property to fake a successful server authentication
// (2) stubError property to fake a server authentication error
function fakeAuthentication(email, password) {
	const response = {}

	let stubError
	let permissions = []
	let displayName

	if (email === 'ranjit@zeiss.com') {
		displayName = 'Ranjit Kumar Singh'
		permissions = ['can-do-anything']
	} else if (email === 'admin@zeiss.com') {
		displayName = 'Administrator'
	} else {
		stubError = {
			statusCode: NOT_FOUND,
		}
	}

	if (password !== 'password') {
		stubError = {
			statusCode: BAD_REQUEST,
		}
	}

	if (stubError) {
		response.stubError = stubError
	} else {
		response.stubSuccess = {
			userName: email,
			displayName,
			permissions,
		}
	}

	return response
}
