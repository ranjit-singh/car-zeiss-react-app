import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import { selectIsAuthenticated, logout } from '../../features/userContext'

export default function NavBar() {
	const isAuthenticated = useSelector(selectIsAuthenticated)
	const dispatch = useDispatch()
	return (
		<Navbar bg='dark' variant='dark'>
			<LinkContainer to='/login'>
				<Navbar.Brand>Carl Zeiss</Navbar.Brand>
			</LinkContainer>
			{isAuthenticated ? (
				<React.Fragment>
					<Nav>
						<LinkContainer to='/users'>
							<Nav.Link>Users</Nav.Link>
						</LinkContainer>
					</Nav>
					<Nav>
						<LinkContainer to='/Blogs'>
							<Nav.Link>Blogs</Nav.Link>
						</LinkContainer>
					</Nav>
				</React.Fragment>
			) : null}
			<Navbar.Collapse className='justify-content-end'>
				{isAuthenticated ? (
					<Navbar.Text>
						<a href='/login' onClick={() => dispatch(logout())}>
							Logout
						</a>
					</Navbar.Text>
				) : (
					<LinkContainer to='/login'>
						<Nav.Link>Log In</Nav.Link>
					</LinkContainer>
				)}
			</Navbar.Collapse>
		</Navbar>
	)
}
