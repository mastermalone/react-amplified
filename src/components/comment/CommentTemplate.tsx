import React from 'react';
import { CommentInterface } from './index';



const CommentTemplate = ({ canEdit, comment, date, user, media, id }: CommentInterface): JSX.Element => (
  <div>
    <div>
      <div>{user.userName}</div>
      {canEdit && (
        <div>Edit</div>
      )}
    </div>
    <div>main content here</div>
  </div>
);

export default CommentTemplate;