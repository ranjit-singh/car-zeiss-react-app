import Blogs from './Blogs'
import * as selectors from './blogs.selectors'
import slice from './blogs.slice'
import * as asyncActions from './blogs.asyncActions'

export const { name, reducer } = slice

export const { fetchAllBlogs } = asyncActions
export const { selectAllBlogs } = selectors

export default Blogs
