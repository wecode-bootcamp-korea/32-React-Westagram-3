import React, { useState } from 'react';
import CommentList from '../Components/CommentList';
import CommentForm from './CommentForm';
export default function CommentWrap({ arr }) {
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState(arr);

  const handleReviewInput = event => {
    setComment(event.target.value); // 인풋값 계속 리로드
  };

  const handleTotalEnter = e => {
    e.preventDefault();

    // const plusArray = [...commentArrary]; // 지금까지 배열을 저장한다.
    // plusArray.push({ id: '_heejuun_', comment: comment }); // 빈 값이 아니면  plusArray에 푸쉬한다
    if (comment.trim() !== '') {
      setCommentArray(prev => [
        ...prev,
        { id: Date.now(), comment: comment, userName: '_heejun_' },
      ]);
      // setCommentArray(plusArray); // 새로운 값으로 저장한다.
    }
    setComment(''); // 이미 저장된 댓글은 지운다.
  };
  return (
    <div className="comment-wrap">
      <div className="comment">
        <div>
          <span className="comment-myname">_heejuun_</span>
          <span> 찰칵 📸...</span>
          <span className="comment-plus">더보기</span>
        </div>
      </div>
      <CommentList commentArray={commentArray} />
      <CommentForm
        value={comment}
        onChange={handleReviewInput}
        onSubmit={handleTotalEnter}
      />
    </div>
  );
}
