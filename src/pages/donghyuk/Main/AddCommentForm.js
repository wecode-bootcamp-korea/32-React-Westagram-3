import React, { useRef, useState } from 'react';
import './AddCommentForm.scss';

const AddCommentForm = ({ onAdd }) => {
  const [validation, setValidation] = useState(false);
  const inputRef = useRef();
  const formRef = useRef();

  const handleAdd = event => {
    event.preventDefault();
    const content = inputRef.current.value;
    content.trim() && onAdd(content.trim());
    formRef.current.reset();
    setValidation(false);
  };

  const handleInput = () => {
    const CommentValue = inputRef.current.value;
    CommentValue.trim() ? setValidation(true) : setValidation(false);
  };

  return (
    <form ref={formRef} className="addForm" onSubmit={handleAdd}>
      <input
        ref={inputRef}
        className="addForm-input"
        type="text"
        placeholder="댓글 달기..."
        onChange={handleInput}
      />
      <button className={`addForm-button ${validation ? '' : 'disable'}`}>
        게시
      </button>
    </form>
  );
};

export default AddCommentForm;
