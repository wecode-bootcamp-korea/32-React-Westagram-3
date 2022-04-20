import React from 'react';
import '../Components/FeedHeader.scss';
export default function FeedHeader({ feedHeader: { header } }) {
  return (
    <div className="feed-header">
      <img alt="피드 프로필 이미지" src={header.headerUrl} />
      <span className="feed-header-myName">{header.headerId}</span>
    </div>
  );
}
