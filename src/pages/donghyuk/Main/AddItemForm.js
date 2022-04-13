import React, { useRef } from 'react';
import './AddItemForm.scss';

const AddItemForm = ({ onAdd }) => {
  const inputRef = useRef();
  const formRef = useRef();

  const handleAdd = event => {
    event.preventDefault();
    const text = inputRef.current.value;
    text.trim() && onAdd(text);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="addForm" onSubmit={handleAdd}>
      <input
        ref={inputRef}
        className="addForm-input"
        type="text"
        placeholder="댓글 달기..."
      />
      <button className="addForm-button">게시</button>
    </form>
  );
};

export default AddItemForm;
