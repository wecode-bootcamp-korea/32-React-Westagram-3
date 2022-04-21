import React, { useEffect, useState } from 'react';
import '../Feeds/Feeds.scss';
import Comments from '../Comments/Comments.js';

const Feeds = () => {
  const [jsondata, setJsonData] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setJsonData(data);
      });
  }, []);

  const addFeeds =
    jsondata &&
    jsondata.item.map((x, index) => {
      const ILikeThisFeed = () => {
        if (x.isLiked === true) {
          return '/images/hyungwon/heart1.png';
        } else if (x.isLiked === false) {
          return '/images/hyungwon/heart.png';
        }
      };
      return (
        <div key={index} className="feeds">
          <article className="article">
            <div className="profile">
              <div className="profile_right">
                <img
                  src={x.userProfilePhoto}
                  alt="myProfilePhoto"
                  className="profile_photo"
                />
                <div className="profile_name">{x.userName}</div>
              </div>
              <img
                src="/images/hyungwon/more.png"
                className="profile_left"
                alt="more"
              />
            </div>
            <div className="photo">
              <img src={x.FeedPhotoUrl} className="photo1" alt="content" />
            </div>
            <div className="activity">
              <div className="activity_right">
                <button>
                  <img
                    src={ILikeThisFeed()}
                    alt="post_heart"
                    className="post_heart"
                    id="post_heart"
                  />
                </button>
                <img
                  src="/images/hyungwon/bubble-chat.png"
                  alt="comment_go"
                  className="comment_go"
                />
                <img
                  src="/images/hyungwon/upload.png"
                  alt=""
                  className="share"
                />
              </div>
              <img
                src="/images/hyungwon/mark.png"
                className="activity_left"
                alt=""
              />
            </div>
            <div className="who_likes">
              <img
                src="/images/hyungwon/whoProfile.jpg"
                alt="whoProfile"
                className="who_profile"
              />
              <p className="who_like">rlagustjd님 외 10명이 좋아합니다</p>
            </div>
            <div className="commit">
              <div className="profile_name commit_name">{x.userName}</div>
              <div className="commit_content">{x.content}</div>
            </div>
            <Comments banana={jsondata.comment} />
          </article>
        </div>
      );
    });
  return addFeeds;
};

export default Feeds;
