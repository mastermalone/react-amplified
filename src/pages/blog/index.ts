import withHooks from 'src/common/withHooks'
import BlogTemplate from './BlogTemplate'

type BlogType = {
  id: string
}
export interface BlogInterface {
  blog?: BlogType[]
}

const Blog = withHooks(
  BlogTemplate,
  (): BlogInterface => {
    const blogData = [
      {
        id: '123456',
      },
    ]
    return {
      blog: blogData,
    }
  },
)

export default Blog
