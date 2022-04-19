import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';

import Feed from './Feed';
import './Main.scss';
import MainRight from './MainRight';
import StoriesWrap from './StoriesWrap';

const Main = () => {
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/data/myData.json')
      .then(res => res.json())
      .then(data => setMyData(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Nav />
      <main>
        {myData && (
          <div>
            <section className="feeds">
              <StoriesWrap storyData={myData.storyData} />
              {myData.feedData.map(it => (
                <Feed key={it.id} data={it} userData={myData.userData} />
              ))}
            </section>
            <MainRight
              userData={myData.userData}
              recommendData={myData.recommendData}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Main;
