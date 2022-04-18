import React from 'react';
import Comment from './Comment';
import './Comments.scss';

const Comments = ({ comments, onDelete }) => {
  return (
    <ul className="comments">
      {comments.map(comment => (
        <Comment
          key={comment.commentId}
          onDelete={onDelete}
          comment={comment}
        />
      ))}
    </ul>
  );
};

export default Comments;
