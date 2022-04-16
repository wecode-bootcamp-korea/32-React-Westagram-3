import React, { useRef } from 'react';
import '../Comment/Comment.scss';

const Comment = props => {
  const deleteHeart = useRef();
  const deleteComment = e => {
    if (e.target.className === 'delete_comment') {
      e.target.closest('.add_comment').remove();
    }
  };
  const likeComment = () => {
    deleteHeart.current.src = '/images/hyungwon/heart1.png';
  };
  const addComment = props.banana.map(x => {
    return (
      <li key={x.key} className="add_comment" onClick={deleteComment}>
        <div className="comment_right">
          <div className="nickname">jhw</div>
          <div className="inputValue">{x.contents}</div>
        </div>
        <div className="comment_button">
          <button>
            <img
              alt="delete_comment"
              src="/images/hyungwon/delete.png"
              className="delete_comment"
            />
          </button>
          <button onClick={likeComment}>
            <img
              ref={deleteHeart}
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
