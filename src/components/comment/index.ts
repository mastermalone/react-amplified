import withHooks from 'src/common/withHooks'
import CommentTemplate from './CommentTemplate'

type User = {
  id: string
  firstName: string
  lastName: string
  userName: string
  avatar: string
  personalQuote: string
}

export interface CommentInterface {
  id: string
  user: User
  comment: string
  date: string
  media?: string
  canEdit: boolean
}

const Comment = withHooks(
  CommentTemplate,
  ({ canEdit, comment, date, user, media, id }: CommentInterface) => {
    return {
      canEdit,
      comment,
      date,
      user,
      media,
      id,
    }
  },
)

export default Comment
