import React from 'react';
import '../Components/CommentForm.scss';
export default function CommentForm({ value, onChange, onSubmit }) {
  return (
    <form className="comment-action-wrap" onSubmit={e => onSubmit(e)}>
      <input
        className="comment-input"
        type="text"
        placeholder="댓글달기..."
        value={value}
        onChange={event => {
          onChange(event);
        }}
      />
      <div className="comment-btn">
        <button>게시</button>
      </div>
    </form>
  );
}
