import React, { useState, useEffect } from 'react';
import Feed from './Feed';
import Aside from '../Aside/Aisde';

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
      <main className="multipleFeeds">
        <div className="feeds">
          {feedComponents.map(feed => {
            const { id, userName, feedImg, firstLiker, likeCounter } = feed;
            return (
              <Feed
                key={id}
                userName={userName}
                feedImg={feedImg}
                firstLiker={firstLiker}
                likeCounter={likeCounter}
              />
            );
          })}
        </div>
        <Aside />
      </main>
    </>
  );
}

export default MultipleFeeds;
