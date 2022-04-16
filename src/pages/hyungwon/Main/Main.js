import React from 'react';
import { useState } from 'react';
import './Main.scss';
import MainRight from '../Main/MainRight/MainRight.js';
import Nav from '../../../components/Nav/Nav.js';
import Comment from './Comment/Comment';

const Main = () => {
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  const handleInput = e => {
    const { value } = e.target;
    setComment(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (comment.trim().length > 0) {
      setCommentArray([
        ...commentArray,
        {
          key: new Date().getTime(),
          contents: comment,
        },
      ]);
    }
    setComment('');
  };
  return (
    <>
      <Nav />
      <main>
        <div className="feeds">
          <article className="article">
            <div className="profile">
              <div className="profile_right">
                <img
                  src="/images/hyungwon/myProfilePhoto.jpg"
                  alt="myProfilePhoto"
                  className="profile_photo"
                />
                <div className="profile_name">wkdguddnjs</div>
              </div>
              <img
                src="/images/hyungwon/more.png"
                className="profile_left"
                alt="more"
              />
            </div>
            <div className="photo">
              <img
                src="/images/hyungwon/feedphoto.jpg"
                className="photo1"
                alt="content"
              />
            </div>
            <div className="activity">
              <div className="activity_right">
                <img
                  src="/images/hyungwon/heart1.png"
                  alt="post_heart"
                  className="post_heart"
                />
                <img
                  src="/images/hyungwon/bubble-chat.png"
                  alt="comment_go"
                  className="comment_go"
                />
                <img
                  src="/images/hyungwon/upload.png"
                  alt=""
                  className="share"
                />
              </div>
              <img
                src="/images/hyungwon/mark.png"
                className="activity_left"
                alt=""
              />
            </div>
            <div className="who_likes">
              <img
                src="/images/hyungwon/whoProfile.jpg"
                alt="whoProfile"
                className="who_profile"
              />
              <p className="who_like">rlagustjd님 외 10명이 좋아합니다</p>
            </div>
            <div className="commit">
              <div className="profile_name commit_name">wkdguddnjs</div>
              <div className="commit_content">벚꽃 보러가자</div>
            </div>
            <Comment banana={commentArray} />
            <div className="upload_time">1시간 전</div>
            <form className="upload_comment" onSubmit={handleSubmit}>
              <input
                onChange={handleInput}
                type="text"
                name="comment"
                className="commit_comment"
                placeholder="댓글달기..."
                width="30"
                value={comment}
              />
              <button className="press_commit">게시</button>
            </form>
          </article>
        </div>
        <MainRight />
      </main>
    </>
  );
};

export default Main;
