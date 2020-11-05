import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Page from './widgets/Page/Page'
import Home from './features/Home'
import Blogs from './features/blogs'
import Users from './features/users'
import LogIn from './features/LogIn'

export default function Routes() {
	return (
		<Switch>
			<PageRoute path='/users'>
				<Users />
			</PageRoute>
			<PageRoute path='/Blogs'>
				<Blogs />
			</PageRoute>
			<PageRoute path='/login'>
				<LogIn />
			</PageRoute>
			<PageRoute path='/'>
				<Home />
			</PageRoute>
		</Switch>
	)
}

function PageRoute({ children, ...rest }) {
	return (
		<Route {...rest}>
			<Page>{children}</Page>
		</Route>
	)
}
