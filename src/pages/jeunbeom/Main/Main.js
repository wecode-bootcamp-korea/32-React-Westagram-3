import React from 'react';
import './Main.scss';
import { useState } from 'react';
import Comment from './Comment';

function Main() {
  const [comment1, setComment1] = useState('');
  const handleOnChange = event => {
    setComment1(event.target.value);
  };

  const [commentContainer, setCommentContainer] = useState([]);
  const handleOnSubmit = event => {
    event.preventDefault();
    if (comment1 === '') {
      return;
    }
    setCommentContainer(commentValueList => [...commentValueList, comment1]);
    setComment1('');
  };

  return (
    <body>
      <nav className="navigator">
        <div className="nav-left">
          <img
            className="instagram-img"
            src="../images/jeunbeom/instagram.png"
            alt="인스타그램 로고 이미지"
          />
          <p className="instagram-word">Instagram</p>
        </div>
        <div className="nav-center">
          <input type="text" class="search" placeholder="검색" />
          <i class="fa-solid fa-magnifying-glass" />
        </div>
        <div className="nav-right">
          <img
            className="explore"
            src="../images/jeunbeom/explore.png"
            alt="탐색 아이콘"
          />
          <img
            className="heart"
            src="../images/jeunbeom/heart.png"
            alt="좋아요 아이콘"
          />
          <img
            className="profileicon"
            src="../images/jeunbeom/profile.png"
            alt="계정 아이콘"
          />
        </div>
      </nav>

      <div>
        <main className="page">
          <div className="bigbox">
            <div className="id">
              <i className="fa-solid fa-circle" />
              <p className="userid">beom_pie</p>
              <p className="dots">···</p>
            </div>
            <img
              className="dog"
              src="../images/jeunbeom/dog.jpg"
              alt="메인 피드 이미지"
            />
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
                <strong>wecode</strong>님 <strong>외 100명</strong>이 좋아합니다
              </span>
            </div>
            <ul className="commentbox1">
              <li className="comment1">dog_lover </li>
              <li class="comment2">강아지가 너무 귀여워요...</li>
              <span class="seemore"> 더 보기</span>
            </ul>
            <ul className="userCommentList">
              <Comment name={commentContainer} />
            </ul>

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
          <div className="main-right">
            <div className="idinfo">
              <div className="profile">
                <img
                  className="house"
                  src="../images/jeunbeom/house.jpg"
                  alt="광고 계정 이미지"
                />
                <p className="profileId">
                  <strong>pet_shop</strong>
                </p>
              </div>
            </div>
            <div className="story">
              <div className="storyuser">
                <p className="seestory">스토리</p>
                <p className="storyseeall">모두 보기</p>
              </div>
              <div className="friendstory">
                <img
                  className="friend1"
                  src="../images/jeunbeom/yogurt.jpg"
                  alt="친구 이미지"
                />
                <p className="yougurtlover">yogurt_lover</p>
              </div>
            </div>
            <div className="recommendation">
              <div className="recommendationuser">
                <p className="client">회원님을 위한 추천</p>
                <p className="clientseeall">모두 보기</p>
              </div>
              <div className="recommenduser">
                <img
                  className="cat"
                  src="../images/jeunbeom/cat.jpg"
                  alt="추천 이미지"
                />
                <p className="knowuser">seuboi</p>
                <p className="follow">팔로우</p>
              </div>
            </div>
            <div className="restriction">
              <p>
                Instagram 정보 . 지원 . 홍보센터 . API . 채용 정보 .
                개인청보처리방침 . 약관 . 디렉터리 . 프로필 . 해시태그 . 언어
              </p>
            </div>
            <div className="copyright">
              <p>ⓒ 2021 INSTAGRAM</p>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
}
export default Main;
