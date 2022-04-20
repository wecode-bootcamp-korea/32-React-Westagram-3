import React, { useState } from 'react';
import CommentList from '../Components/CommentList';
import CommentForm from './CommentForm';
import '../Components/CommentWrap.scss';
export default function CommentWrap({ arr }) {
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState(arr);

  const handleReviewInput = event => {
    setComment(event.target.value);
  };

  const handleTotalEnter = e => {
    e.preventDefault();

    if (comment.trim() !== '') {
      setCommentArray(prev => [
        ...prev,
        { id: Date.now(), comment: comment, userName: '_heejun_' },
      ]);
    }
    setComment('');
  };
  return (
    <div className="comment-wrap">
      <div className="comment">
        <div>
          <span className="comment-myname">_heejuun_</span>
          <span> 찰칵 📸...</span>
          <span className="comment-plus">더보기</span>
        </div>
      </div>
      <CommentList commentArray={commentArray} />
      <CommentForm
        value={comment}
        onChange={handleReviewInput}
        onSubmit={handleTotalEnter}
      />
    </div>
  );
}
