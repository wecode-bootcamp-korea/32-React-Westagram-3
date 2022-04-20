import React from 'react';
import '../Components/FeedNav.scss';

export default function FeedNav() {
  return (
    <div className="feed-nav">
      <div className="feed-nav-left">
        <i className="fa-solid fa-heart" />
        <i className="fa-solid fa-comment" />
        <i className="fa-solid fa-arrow-up-from-bracket" />
      </div>
      <div className="feed-nav-right">
        <i className="fa-solid fa-bookmark" />
      </div>
    </div>
  );
}
