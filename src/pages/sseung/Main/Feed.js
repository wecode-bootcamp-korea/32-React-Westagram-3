import React, { useEffect, useState } from 'react';
import Contents from './Contents';
import FeedTop from './FeedTop';
import ImageSlide from './ImageSlide';
import Interaction from './Interaction';

const Feed = ({ data }) => {
  const [commentList, setCommentList] = useState(data.comments);
  const [commentText, setCommentText] = useState('');

  // commentList가 업데이트 될 때만 실행 : 댓글 추가, 댓글 삭제

  useEffect(() => {
    commentList.map((item, index) => (item.id = index));
  }, [commentList]);

  // 댓글 추가
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

  //댓글 삭제
  const onRemoveComment = index => {
    // console.log(`index:${index}, ${index+1}번째 리스트`)
    setCommentList([...commentList.filter(x => x.id !== index)]);
  };

  //댓글 좋아요
  const onCommentLike = index => {
    const clickLike = commentList.find(item => item.id === index);
    clickLike.liked = !clickLike.liked;
    const commentListCopy = [...commentList];
    commentListCopy[index] = clickLike;
    setCommentList(commentListCopy);
    //배열 복사해서 쓰는 것 공부하기!!!!
  };

  return (
    <article className="feed" data-id={data.id}>
      <FeedTop profile={data.profileImg} userId={data.userId} />
      <ImageSlide images={data.imgSrc} />
      <Interaction liked={data.liked} likeNum={data.likeNum} />
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
