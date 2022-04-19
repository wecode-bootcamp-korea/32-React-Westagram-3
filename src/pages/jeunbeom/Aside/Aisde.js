import './Aside.scss';
import React from 'react';
import Footer from './Footer.js';

function Aside() {
  return (
    <div className="page-right">
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
            <p className="yougurtlover">yogurt</p>
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
      </div>
      <Footer />
    </div>
  );
}

export default Aside;
