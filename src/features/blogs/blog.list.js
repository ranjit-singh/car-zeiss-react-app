import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Formik } from 'formik'
import { fetchAllBlogs, blogPost } from './blogs.asyncActions'
import { selectAllBlogs, selectBlogFilter } from './blogs.selectors'
import BusyIndicator from '../../widgets/busyIndicator'
import { actions } from './blogs.slice'

const { updateFilter } = actions

export default function BlogList() {
	const blogs = useSelector(selectAllBlogs)
	const filter = useSelector(selectBlogFilter)
	const dispatch = useDispatch()
	const [title, setTitle] = useState('')
	const [comment, setComment] = useState('')

	useEffect(() => {
		dispatch(
			fetchAllBlogs({
				useCaching: true,
				noBusySpinner: false,
			})
		)
	}, [dispatch, true, false])

	return (
		<Container fluid>
			<Row>
				<Col>
					<h2>Blogs</h2>
				</Col>
				<Col>
					<input
						type='text'
						value={filter}
						onChange={(e) => dispatch(updateFilter(e.target.value))}
						placeholder='search by title...'
						className='form-control'
					/>
				</Col>
			</Row>
			<Row>
				<Col>
					<BusyIndicator>
						<ul>
							{blogs &&
								blogs
									.filter((blog) =>
										filter ? blog.title.includes(filter) : true
									)
									.map((blog) => (
										<>
											<li key={blog.id}>
												<h6>
													{'Title:-'}
													{blog.title}
												</h6>
											</li>
											<p>{blog.body}</p>
										</>
									))}
						</ul>
					</BusyIndicator>
				</Col>
			</Row>
			<Row>
				<Col>
					<Formik
						initialValues={{ userId: 1, title, body: comment }}
						onSubmit={(values, { setSubmitting, resetForm }) => {
							// When button submits form and form is in the process of submitting, submit button is disabled
							setSubmitting(true)

							// Simulate submitting to database, shows us values submitted, resets form
							dispatch(
								blogPost({ useCaching: true, noBusySpinner: false, values })
							).then(() => {
								resetForm()
								setSubmitting(false)
							})
						}}
					>
						{({
							values,
							// errors,
							// touched,
							handleChange,
							handleBlur,
							handleSubmit,
							isSubmitting,
						}) => (
							<Form onSubmit={handleSubmit}>
								<Form.Group controlId='formBasicEmail'>
									<Form.Label>Title</Form.Label>
									<Form.Control
										type='text'
										placeholder='Enter title'
										onChange={(e) => setTitle(e.target.value)}
									/>
								</Form.Group>
								<Form.Group controlId='formBasicComments'>
									<Form.Label>Comments</Form.Label>
									<Form.Control
										as='textarea'
										rows={3}
										onChange={(e) => setComment(e.target.value)}
									/>
								</Form.Group>
								<Button variant='primary' type='submit'>
									Submit Post
								</Button>
							</Form>
						)}
					</Formik>
				</Col>
			</Row>
		</Container>
	)
}
