import React from 'react';

const Comment = props => {
  return props.name.map((value, index) => (
    <ul>
      <li key={index}>
        <span style={{ fontWeight: 'bold' }}>아무개</span> {value}
      </li>
    </ul>
  ));
};

export default Comment;
