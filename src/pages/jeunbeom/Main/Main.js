import React from 'react';
import './Main.scss';
import MultipleFeeds from '../Feed/MultipleFeeds';
import Nav from '../../../components/Nav/Nav';

function Main() {
  return (
    <main>
      <Nav />
      <MultipleFeeds />
    </main>
  );
}
export default Main;
