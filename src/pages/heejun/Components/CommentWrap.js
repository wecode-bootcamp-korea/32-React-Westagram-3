import React from 'react';
import CommentList from '../Components/CommentList';
import CommentForm from './CommentForm';
export default function CommentWrap({ onChange, arr, value, onSubmit }) {
  return (
    <div className="comment-wrap">
      <div className="comment">
        <div>
          <span className="comment-myname">_heejuun_</span>
          <span> 아르떼 뮤지엄에서 찰칵 📸...</span>
          <span className="comment-plus">더보기</span>
        </div>
      </div>
      <CommentList arr={arr} />
      <CommentForm value={value} onChange={onChange} onSubmit={onSubmit} />
    </div>
  );
}
