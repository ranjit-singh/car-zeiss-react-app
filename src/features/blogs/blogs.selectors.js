import slice from './blogs.slice'

export const selectSlice = (state) => state[slice.name]

export const selectAllBlogs = (state) => selectSlice(state).allBlogs
export const selectBlogFilter = (state) => selectSlice(state).filter
export const selectBlogsById = (blogId) => (state) =>
	selectAllBlogs(state).find((item) => item.id === blogId)
