import React from 'react';

export default function CommentList({ arr }) {
  return (
    <ul className="comment-push">
      {arr.map(comment => {
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
