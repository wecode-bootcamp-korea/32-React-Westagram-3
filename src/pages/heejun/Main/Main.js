import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import { useState, useEffect } from 'react';
import FeedHeader from '../Components/FeedHeader';
import FeedNav from '../Components/FeedNav';
import FeedHeartCount from '../Components/FeedHeartCount';
import CommentWrap from '../Components/CommentWrap';
import FeedImg from '../Components/FeedImg';
import Aside from '../Components/Aside';
function Main() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feed.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeed(data.item);
      });
  }, []);

  return (
    <div className="wrap">
      <Nav />

      <main className="containerMain">
        <article>
          {feed.map(item => (
            <div key={item.feedsId} className="feeds">
              <FeedHeader feedHeader={item.feedsInfo} />
              <article className="article">
                <FeedImg feedImg={item.feedsInfo} />
                <FeedNav />
                <FeedHeartCount />
                <CommentWrap arr={item.feedsInfo.article.comment} />
              </article>
            </div>
          ))}
        </article>
        <Aside />
      </main>
    </div>
  );
}

export default Main;
