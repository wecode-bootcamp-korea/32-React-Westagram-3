import React from 'react';
import Comments from './Comments';
import './FeedContent.scss';

const FeedContent = ({ feedInfo, onDelete }) => {
  return (
    <>
      <section className="content">
        <div className="content-post">
          <span className="post__id">{feedInfo.profile.userName}</span>
          <span className="post__text">{feedInfo.post}</span>
        </div>
      </section>
      <Comments onDelete={onDelete} comments={feedInfo.comment} />
      <span className="article-update__time">11시간전</span>
    </>
  );
};

export default FeedContent;
