import React from 'react'
import BlogList from './blog.list'
import { WithRestrictedAccess } from '../userContext'

const Authenticated = () => <BlogList />

export default WithRestrictedAccess(Authenticated)
