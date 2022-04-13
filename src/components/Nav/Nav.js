import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="navBar">
      <div className="navBar-container">
        <div className="navBar-left">
          <button className="navBar-logo">
            <i className="fab fa-instagram" />
          </button>
          <div className="navBar-verticalBar" />
          <span className="navBar-title">Westagram</span>
        </div>
        <div className="navBar-center">
          <input type="text" className="navBar-search" placeholder="🔍 검색" />
        </div>
        <div className="navBar-right">
          <button className="navBar-compass">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt=""
            />
          </button>
          <button className="navBar-heart">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt=""
            />
          </button>
          <button className="navBar-user">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
