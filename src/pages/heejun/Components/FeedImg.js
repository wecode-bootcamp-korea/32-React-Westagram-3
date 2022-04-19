import React from 'react';

export default function FeedImg({ feedImg: { pic } }) {
  return (
    <img
      alt="피드 본문 이미지"
      src={pic.picUrl}
      // src="/images/heejun/97BD93F8-9568-4F88-B209-FD72E61BED7C.JPG"
      className="feed-Img"
    />
  );
}
