import React, { useEffect, useState } from 'react';
import MainFeeds from './MainFeeds';
import Navbar from '../../../components/Nav/Nav';
import './Main.scss';

const Main = props => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json', { method: 'GET' })
      .then(response => response.json())
      .then(data => setFeeds(data.items));
  }, []);

  return (
    <>
      <Navbar />
      <div className="main-container">
        {feeds.map(item => (
          <MainFeeds key={item.feedId} feedInfo={item.feedInfo} />
        ))}
        <div className="main-right">
          <div className="right-profile">
            <img
              src="images/donghyuk/덕순1.jpg"
              alt=""
              className="right-profile__image"
            />
            <div className="right-profile-description">
              <span className="right-profile__id">gel_fos</span>
              <span className="right-profile__name">덕순 (5세/닥스훈트)</span>
            </div>
          </div>
          <div className="right-story">
            <div className="story-header">
              <span className="story-header__text1">스토리</span>
              <span className="story-header__text2">모두 보기</span>
            </div>
            <section className="story-rows">
              <div className="story-row">
                <div className="story-left">
                  <img
                    src="images/donghyuk/덕순1.jpg"
                    alt=""
                    className="story-row__image"
                  />
                  <div className="right-profile-description">
                    <span className="story-row__id">gel_fos</span>
                    <span className="story-row__follow">
                      덕순 (5세/닥스훈트)
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="right-story">
            <div className="story-header">
              <span className="story-header__text1">회원님을 위한 추천</span>
              <span className="story-header__text2">모두 보기</span>
            </div>
            <section className="story-rows">
              <div className="story-row">
                <div className="story-left">
                  <img
                    src="images/donghyuk/덕순1.jpg"
                    alt=""
                    className="story-row__image"
                  />
                  <div className="right-profile-description">
                    <span className="story-row__id">gel_fos</span>
                    <span className="story-row__follow">
                      덕순 (5세/닥스훈트)
                    </span>
                  </div>
                </div>
                <button className="story-left__follow-text">팔로우</button>
              </div>
              <div className="story-row">
                <div className="story-left">
                  <img
                    src="images/donghyuk/덕순1.jpg"
                    alt=""
                    className="story-row__image"
                  />
                  <div className="right-profile-description">
                    <span className="story-row__id">gel_fos</span>
                    <span className="story-row__follow">
                      덕순 (5세/닥스훈트)
                    </span>
                  </div>
                </div>
                <button className="story-left__follow-text">팔로우</button>
              </div>
              <div className="story-row">
                <div className="story-left">
                  <img
                    src="images/donghyuk/덕순1.jpg"
                    alt=""
                    className="story-row__image"
                  />
                  <div className="right-profile-description">
                    <span className="story-row__id">gel_fos</span>
                    <span className="story-row__follow">
                      덕순 (5세/닥스훈트)
                    </span>
                  </div>
                </div>
                <button className="story-left__follow-text">팔로우</button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
