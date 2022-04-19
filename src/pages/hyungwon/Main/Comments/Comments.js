import React, { useState } from 'react';
import Comment from '../Comment/Comment.js';
import DefaultComment from '../DefaultComment/DefaultComment';

const Comments = ({ banana }) => {
  const [commentArray, setCommentArray] = useState([]);
  const [comment, setComment] = useState('');
  const handleInput = e => {
    const { value } = e.target;
    setComment(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (comment.trim().length > 0) {
      setCommentArray([
        ...commentArray,

        {
          key: new Date().getTime(),
          content: comment,
        },
      ]);
    }
    setComment('');
  };

  return (
    <>
      <DefaultComment commentList={banana} />
      <Comment fruit={commentArray} />
      <p className="upload_time">1시간 전</p>
      <form className="upload_comment" onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          type="text"
          className="commit_comment"
          placeholder="댓글달기..."
          width="30"
          value={comment}
        />
        <button className="press_commit">게시</button>
      </form>
    </>
  );
};

export default Comments;
