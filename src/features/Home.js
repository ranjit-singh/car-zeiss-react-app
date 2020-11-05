import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { WithRestrictedAccess } from './userContext'
const Authenticated = () => (
	<>
		<h2>Carl Zeiss</h2>
		<h6>Assignment Created by:- Ranjit Kumar Singh</h6>
		<Row>
			<Col>
				<Link to='/users'>
					<Button variant='link'>Users</Button>
				</Link>
			</Col>
		</Row>
		<Row>
			<Col>
				<Link to='/blogs'>
					<Button variant='link'>Blogs</Button>
				</Link>
			</Col>
		</Row>
	</>
)

export default WithRestrictedAccess(Authenticated)
