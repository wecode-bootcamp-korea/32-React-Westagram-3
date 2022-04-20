import React from 'react';
import './SearchedUsers.scss';

const SearchedUsers = ({ user }) => (
  <li className="searchedUsers">
    <div className="searchedUser-row">
      <div className="searchedUser-left">
        <img className="searchedUser-img" src={user.url} alt="" />
        <div className="searchedUser-description">
          <span className="searchedUser-id">{user.userName}</span>
        </div>
      </div>
    </div>
  </li>
);

export default SearchedUsers;
