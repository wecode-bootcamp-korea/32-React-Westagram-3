import React from 'react';

const Comment = props => {
  return props.name.map((value, index) => (
    <ul key={index}>
      <li>
        <span style={{ fontWeight: 'bold' }}>아무개</span> {value}
      </li>
    </ul>
  ));
};

export default Comment;
