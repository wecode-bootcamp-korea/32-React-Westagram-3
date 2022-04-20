import React from 'react';
import '../Components/CommentList.scss';

export default function CommentList({ commentArray }) {
  return (
    <ul className="comment-push">
      {commentArray.map(comment => {
        return (
          <li key={comment.id}>
            <span className="id-value">{comment.userName}</span>
            <span className="comment-value">{comment.comment}</span>
          </li>
        );
      })}
    </ul>
  );
}
