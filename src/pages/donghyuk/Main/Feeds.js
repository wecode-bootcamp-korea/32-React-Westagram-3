import React from 'react';
import Article from './Article';
import Profile from './Profile';
import './Feeds.scss';

const Feeds = ({ feedInfo }) => {
  return (
    <div className="main-feeds">
      <Profile profileInfo={feedInfo.profile} />
      <Article profileInfo={feedInfo.profile} feedInfo={feedInfo} />
    </div>
  );
};

export default Feeds;
