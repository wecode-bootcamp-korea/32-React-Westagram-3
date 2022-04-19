import React from 'react';
import './Main.scss';
import MainRight from '../Main/MainRight/MainRight.js';
import Nav from '../../../components/Nav/Nav.js';
import Feeds from './Feeds/Feeds';

const Main = () => {
  return (
    <>
      <Nav />
      <main>
        <div className="allfeeds">
          <Feeds />
        </div>
        <MainRight />
      </main>
    </>
  );
};

export default Main;
