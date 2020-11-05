import React from 'react'
import UserList from './user.list'
import { WithRestrictedAccess } from '../userContext'

const Authenticated = () => <UserList />

export default WithRestrictedAccess(Authenticated)
