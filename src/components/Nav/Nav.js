import React, { useState } from 'react';
import SearchedUsers from './SearchedUsers';
import './Nav.scss';

const Nav = ({ feeds }) => {
  const [searchedUsers, setSearchedUsers] = useState(null);
  const users = feeds.map(feed => feed.feedInfo.profile);

  const handleInput = e => {
    const searchInputValue = e.target.value;
    searchInputValue === ''
      ? setSearchedUsers(null)
      : setSearchedUsers(
          users.filter(user => user.userName.includes(e.target.value))
        );
  };

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
          <input
            onChange={handleInput}
            type="text"
            className="navBar-search"
            placeholder="🔍 검색"
          />
          {searchedUsers && (
            <ul
              className={`navBar-searchedUsersList ${
                searchedUsers ? 'active' : ''
              }`}
            >
              {searchedUsers.map((user, index) => (
                <SearchedUsers key={index} user={user} />
              ))}
            </ul>
          )}
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
