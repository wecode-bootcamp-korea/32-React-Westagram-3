import React from 'react';

export default function Comment({ arr }) {
  return (
    <ul className="comment-push">
      {arr.map((item, index) => {
        return (
          <li key={index}>
            <span className="id-value">{item.id}</span>
            <span className="comment-value">{item.conmment}</span>
          </li>
        );
      })}
    </ul>
  );
}
