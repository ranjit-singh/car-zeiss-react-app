import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { fetchAllUsers } from './users.asyncActions'
import { selectAllUsers, selectUserFilter } from './users.selectors'
import BusyIndicator from '../../widgets/busyIndicator'
import { actions } from './users.slice'

const { updateFilter } = actions

export default function UserList() {
	const users = useSelector(selectAllUsers)
	const filter = useSelector(selectUserFilter)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(
			fetchAllUsers({
				useCaching: true,
				noBusySpinner: false,
			})
		)
	}, [dispatch, true, false])

	return (
		<Container fluid>
			<Row>
				<Col>
					<h2>Users</h2>
				</Col>
				<Col>
					<input
						type='text'
						value={filter}
						onChange={(e) => dispatch(updateFilter(e.target.value))}
						placeholder='search by name...'
						className='form-control'
					/>
				</Col>
			</Row>
			<Row>
				<Col>
					<BusyIndicator>
						<ul>
							{users &&
								users
									.filter((user) =>
										filter ? user.name.includes(filter) : true
									)
									.map((user) => <li key={user.id}>{user.name}</li>)}
						</ul>
					</BusyIndicator>
				</Col>
			</Row>
		</Container>
	)
}
