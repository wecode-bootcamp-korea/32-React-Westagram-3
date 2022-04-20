import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import '../Comment/Comment.scss';

const Comment = props => {
  const likeHeart = useRef();
  const deleteThis = useRef();
  const [count, setCount] = useState(0);
  const deleteComment = (e, index) => {
    if (index === parseInt(e.currentTarget.id)) {
      e.currentTarget.closest('.add_comment').remove();
    }
  };

  const likeComment = (e, index) => {
    setCount(count => count + 1);
    if (index === parseInt(e.currentTarget.id)) {
      if (count % 2 === 0) {
        e.target.src = '/images/hyungwon/heart1.png';
      } else {
        e.target.src = '/images/hyungwon/heart.png';
      }
    }
  };
  const addComment = props.fruit.map((x, indexFromMap) => {
    return (
      <li
        key={x.key}
        id={indexFromMap}
        ref={deleteThis}
        className="add_comment"
      >
        <div className="comment_right">
          <div className="nickname">wkdguddnjs</div>
          <div className="inputValue">{x.content}</div>
        </div>
        <div className="comment_button">
          <button
            id={indexFromMap}
            onClick={e => {
              deleteComment(e, indexFromMap);
            }}
          >
            <img
              alt="delete_comment"
              src="/images/hyungwon/delete.png"
              className="delete_comment"
            />
          </button>
          <button
            id={indexFromMap}
            onClick={e => {
              likeComment(e, indexFromMap);
            }}
          >
            <img
              ref={likeHeart}
              alt="comment_heart"
              src="/images/hyungwon/heart.png"
              className="comment_heart"
            />
          </button>
        </div>
      </li>
    );
  });
  return addComment;
};

export default Comment;
