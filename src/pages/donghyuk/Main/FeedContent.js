import React from 'react';
import Comments from './Comments';
import './FeedContent.scss';

const FeedContent = ({ comments }) => {
  return (
    <>
      <section className="content">
        nickname
        <div className="content-post">
          <span className="post__id">gel_fos</span>
          <span className="post__text">댕댕이🐶</span>
        </div>
      </section>
      <Comments comments={comments} />
      <span className="article-update__time">11시간전</span>
    </>
  );
};

export default FeedContent;
