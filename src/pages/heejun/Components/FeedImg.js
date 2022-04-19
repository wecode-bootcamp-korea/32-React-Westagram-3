import React from 'react';

export default function FeedImg({ feedImg: { pic } }) {
  return <img alt="피드 본문 이미지" src={pic.picUrl} className="feed-Img" />;
}
