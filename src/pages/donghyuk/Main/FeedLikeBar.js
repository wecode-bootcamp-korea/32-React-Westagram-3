import React from 'react';
import './FeedLikeBar.scss';

const FeedLikeBar = props => {
  return (
    <section className="likeBar">
      <img src="images/donghyuk/덕순2.jpg" alt="" className="likeBar-image" />
      <span className="likeBar-text">aineworld님 외 3,543명이 좋아합니다.</span>
    </section>
  );
};

export default FeedLikeBar;
