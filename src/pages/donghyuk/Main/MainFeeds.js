import React from 'react';
import Feeds from './Feeds';
import './MainFeeds.scss';

const MainFeeds = ({ feedInfo }) => {
  return (
    <section className="main-container">
      <Feeds feedInfo={feedInfo} />
    </section>
  );
};

export default MainFeeds;
