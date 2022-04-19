import React, { useEffect, useState } from 'react';
import Contents from './Contents';
import FeedTop from './FeedTop';
import ImageSlide from './ImageSlide';
import Interaction from './Interaction';

const Feed = ({ data }) => {
  const { id, userId, comments, profileImg, imgSrc, liked, likeNum } = data;
  const [commentList, setCommentList] = useState(comments);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    commentList.map((item, index) => (item.id = index));
  }, [commentList]);

  const onComment = e => {
    setCommentText(e.target.value);
  };

  const onCommentSubmit = e => {
    e.preventDefault();
    setCommentList([
      ...commentList.map(item => item),
      {
        id: commentList.length,
        user: '접속아이디',
        text: commentText,
        liked: false,
      },
    ]);
    setCommentText('');
  };

  const onRemoveComment = index => {
    setCommentList([...commentList.filter(x => x.id !== index)]);
  };

  const onCommentLike = index => {
    const clickLike = commentList.find(item => item.id === index);
    clickLike.liked = !clickLike.liked;
    const commentListCopy = [...commentList];
    commentListCopy[index] = clickLike;
    setCommentList(commentListCopy);
  };

  return (
    <article className="feed" data-id={id}>
      <FeedTop profile={profileImg} userId={userId} />
      <ImageSlide images={imgSrc} />
      <Interaction liked={liked} likeNum={likeNum} />
      <Contents
        data={data}
        commentList={commentList}
        commentText={commentText}
        onComment={onComment}
        onCommentSubmit={onCommentSubmit}
        onRemoveComment={onRemoveComment}
        onCommentLike={onCommentLike}
      />
    </article>
  );
};

export default Feed;
