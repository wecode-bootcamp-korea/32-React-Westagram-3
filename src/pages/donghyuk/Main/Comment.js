import React from 'react';
import './Comment.scss';

const Comment = ({ nickname, comment }) => {
  return (
    <li className="commentRow">
      <div className="commentLeft">
        <span className="commentId">{nickname}</span>
        <span className="commentText">{comment}</span>
      </div>
      <div className="commentRight">
        <button className="commentDelete">
          <i className="fas fa-trash-alt" />
        </button>
        <button className="commentHeart">
          <i class="far fa-heart" />
        </button>
      </div>
    </li>
  );
};

export default Comment;
