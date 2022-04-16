import React from 'react';

export default function Comment({ arr }) {
  return (
    <ul className="comment-push">
      {arr.map(item => {
        return (
          <li key={item.id}>
            <span className="id-value">{item.userName}</span>
            <span className="comment-value">{item.conmment}</span>
          </li>
        );
      })}
    </ul>
  );
}
