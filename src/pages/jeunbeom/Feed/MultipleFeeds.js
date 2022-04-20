import React, { useState, useEffect } from 'react';
import Feed from './Feed';
import Aside from '../Aside/Aisde';
import './MultipleFeeds.scss';

function MultipleFeeds() {
  const [feedComponents, setFeedComponents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json')
      .then(res => res.json())
      .then(data => {
        setFeedComponents(data);
      });
  }, []);

  return (
    <>
      <section className="multipleFeeds">
        <div className="feeds">
          {feedComponents.map(feed => {
            const { id, userName, feedImg, firstLiker, likeCounter, comment1 } =
              feed;
            return (
              <Feed
                key={id}
                userName={userName}
                feedImg={feedImg}
                firstLiker={firstLiker}
                likeCounter={likeCounter}
                content={comment1}
              />
            );
          })}
        </div>
      </section>
      <section className="multipleFeeds-right">
        <Aside />
      </section>
    </>
  );
}

export default MultipleFeeds;
