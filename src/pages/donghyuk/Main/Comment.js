import React from 'react';
import './Comment.scss';

const Comment = ({ comment, onDelete }) => {
  const handleDelete = () => {
    onDelete(comment);
  };

  return (
    <li className="commentRow">
      <div className="commentLeft">
        <span className="commentId">{comment.name}</span>
        <span className="commentText">{comment.text}</span>
      </div>
      <div className="commentRight">
        <button onClick={handleDelete} className="commentDelete">
          <i className="fas fa-trash-alt" />
        </button>
        <button className="commentHeart">
          <i className="far fa-heart" />
        </button>
      </div>
    </li>
  );
};

export default Comment;
