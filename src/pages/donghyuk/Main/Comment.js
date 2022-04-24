import React, { useState } from 'react';
import './Comment.scss';

const Comment = ({ comment, onDelete }) => {
  const [heartToggle, setHeartToggle] = useState(false);

  const handleDelete = () => {
    onDelete(comment);
  };

  const handleHeartToggle = () => {
    setHeartToggle(!heartToggle);
  };

  return (
    <li className="commentRow">
      <div className="commentLeft">
        <span className="commentId">{comment.userName}</span>
        <span className="commentText">{comment.content}</span>
      </div>
      <div className="commentRight">
        <button onClick={handleDelete} className="commentDelete">
          <i className="fas fa-trash-alt" />
        </button>
        <button onClick={handleHeartToggle} className="commentHeart">
          {heartToggle ? (
            <i style={{ color: '#ff7473' }} className="fa-solid fa-heart" />
          ) : (
            <i className="far fa-heart" />
          )}
        </button>
      </div>
    </li>
  );
};

export default Comment;
