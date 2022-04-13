import React from 'react';
import Comment from './Comment';
import './Comments.scss';

const Comments = ({ comments }) => {
  return (
    <ul className="comments">
      {comments.map(comment => (
        <Comment
          key={comment.id}
          nickname={comment.name}
          comment={comment.text}
        />
      ))}
    </ul>
  );
};

export default Comments;
