import React from 'react';
import './Comment.scss';

const Comment = ({ nickname, comment }) => {
  return (
    <li className="article-comment__row">
      <span className="comment__id">{nickname}</span>
      <span className="comment__text">{comment}</span>
    </li>
  );
};

export default Comment;
