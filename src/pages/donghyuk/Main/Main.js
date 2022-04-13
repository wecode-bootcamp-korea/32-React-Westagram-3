import React from 'react';
import MainFeeds from './MainFeeds';
import Navbar from '../../../components/Nav/Nav';
import './Main.scss';

const Main = props => {
  return (
    <>
      <Navbar />
      <MainFeeds />
    </>
  );
};

export default Main;
