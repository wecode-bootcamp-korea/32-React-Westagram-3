import React from 'react';

export default function CommentForm({ value, onChange, onSubmit }) {
  return (
    <form className="comment-action-wrap" onSubmit={onSubmit}>
      <input
        className="comment-input"
        type="text"
        placeholder="댓글달기..."
        value={value}
        onChange={onChange}
      />
      <div className="comment-btn">
        <button>게시</button>
      </div>
    </form>
  );
}
