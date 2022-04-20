import './Aside.scss';
import React from 'react';
import Footer from './Footer.js';

function Aside() {
  return (
    <div className="page-right">
      <div className="idInfo">
        <div className="profile">
          <img
            className="house"
            src="../images/jeunbeom/house.jpg"
            alt="광고 계정 이미지"
          />
        </div>
        <div class="profileContainer">
          <p className="profileTop">WECODE</p>
          <p className="profileBottom">wecode_bootcamp</p>
        </div>
      </div>
      <div className="story">
        <div className="storyuser">
          <p className="seestory">스토리</p>
          <p className="storyseeall">모두 보기</p>
        </div>
        <div className="friendContainer">
          <img
            className="friend1"
            src="../images/jeunbeom/yogurt.jpg"
            alt="친구 이미지"
          />
          <div className="idContainer">
            <p className="id-top">yogurt</p>
            <p className="id-bottom">1분전</p>
          </div>
        </div>
        <div className="friendContainer">
          <img
            className="friend1"
            src="../images/jeunbeom/yogurt.jpg"
            alt="친구 이미지"
          />
          <div className="idContainer">
            <p className="id-top">yogurt</p>
            <p className="id-bottom">1분전</p>
          </div>
        </div>
        <div className="friendContainer">
          <img
            className="friend1"
            src="../images/jeunbeom/yogurt.jpg"
            alt="친구 이미지"
          />
          <div className="idContainer">
            <p className="id-top">yogurt</p>
            <p className="id-bottom">1분전</p>
          </div>
        </div>
        <div className="friendContainer">
          <img
            className="friend1"
            src="../images/jeunbeom/yogurt.jpg"
            alt="친구 이미지"
          />
          <div className="idContainer">
            <p className="id-top">yogurt</p>
            <p className="id-bottom">1분전</p>
          </div>
        </div>
      </div>
      <div className="recommendation">
        <div className="recommendationuser">
          <p className="client">회원님을 위한 추천</p>
          <p className="clientseeall">모두 보기</p>
        </div>
        <div className="recommendFollow">
          <div className="recommendContainer">
            <img
              className="recommendFriend"
              src="../images/jeunbeom/cat.jpg"
              alt="추천이미지"
            />
          </div>
          <div className="mightknowUser">
            <p className="knowuser">seuboi</p>
            <p className="whoLikes">wecode님 외 1명이 좋아합니다</p>
          </div>
          <div className="follow">
            <p className="follow">팔로우</p>
          </div>
        </div>
        <div className="recommendFollow">
          <div className="recommendContainer">
            <img
              className="recommendFriend"
              src="../images/jeunbeom/cat.jpg"
              alt="추천이미지"
            />
          </div>
          <div className="mightknowUser">
            <p className="knowuser">seuboi</p>
            <p className="whoLikes">wecode님 외 1명이 좋아합니다</p>
          </div>
          <div className="follow">
            <p className="follow">팔로우</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aside;
