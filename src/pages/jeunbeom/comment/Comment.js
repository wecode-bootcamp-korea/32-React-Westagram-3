import React from 'react';
import './Comment.scss';

const Comment = ({ commentContainer }) => {
  return (
    commentContainer &&
    commentContainer.map(e => {
      return (
        <ul className="comment" key={e.id}>
          <li
            className="commentUser"
            style={{ fontWeight: 'bold', marginLeft: 30, marginRight: 5 }}
          >
            {e.userName}
          </li>
          {e.content}
          <button class="likeHeart">
            <i class="fa-solid fa-heart"></i>
          </button>
          <button>
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </ul>
      );
    })
  );
};

export default Comment;
