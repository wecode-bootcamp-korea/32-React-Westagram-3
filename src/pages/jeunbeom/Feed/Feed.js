import React, { useState, useEffect } from 'react';
import Comment from '../comment/Comment';
import './Feed.scss';

function Feed({ userName, firstLiker, likeCounter, feedImg }) {
  const [comment1, setComment1] = useState('');
  const [commentContainer, setCommentContatiner] = useState([]);

  const handleOnChange = e => {
    setComment1(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const id = Date.now();
    const userName = `beom`;
    const content = comment1;
    setCommentContatiner([...commentContainer, { id, userName, content }]);
    setComment1('');
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json')
      .then(res => res.json())
      .then(data => {
        setCommentContatiner(data);
      });
  }, []);

  return (
    <>
      <body>
        <div>
          <main className="page">
            <div className="profile">
              <div className="id">
                <i className="fa-solid fa-circle" />
                <p className="userid">{userName}</p>
                <p className="dots">···</p>
              </div>
              <img className="feedImg" src={feedImg} alt="메인 피드 이미지" />
              <div className="icons">
                <div className="lefticon">
                  <i className="fa-solid fa-heart" />
                  <i className="fa-solid fa-comment-dots" />
                  <i className="fa-solid fa-share" />
                </div>
                <div className="righticon">
                  <i className="fa-solid fa-bookmark" />
                </div>
              </div>
              <div className="likes">
                <i className="fa-regular fa-face-grin-squint" />
                <span className="howmanylikes">
                  <strong>{firstLiker}</strong>님 외
                  <strong>{likeCounter}</strong>
                  명이 좋아합니다
                </span>
              </div>
              <ul className="commentbox1">
                <li className="commentId">dog_lover </li>
                <li class="commentText">강아지가 너무 귀여워요...</li>
                <span class="seemore"> 더 보기</span>
              </ul>
              <Comment commentContainer={commentContainer} />

              <form className="addcomment" onSubmit={handleOnSubmit}>
                <input
                  type="text"
                  className="toaddcomment"
                  placeholder="   댓글 달기..."
                  value={comment1}
                  onChange={handleOnChange}
                />
                <button className="add">게시</button>
              </form>
            </div>
          </main>
        </div>
      </body>
    </>
  );
}

export default Feed;
