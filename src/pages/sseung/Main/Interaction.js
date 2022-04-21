import { useState } from 'react';

const Interaction = ({ liked, likeNum }) => {
  //피드 좋아요
  const [isFeedLike, setFeedLike] = useState(liked);

  const isToggleLike = () => setFeedLike(!isFeedLike);

  const feedLikeClassName = () => {
    return isFeedLike ? 'fa-solid' : 'fa-regular';
  };
  return (
    <section className="interaction">
      <div className="btn">
        <div className="left_btn">
          <i
            className={`${feedLikeClassName()} fa-heart fa-xl 0`}
            onClick={isToggleLike}
          />
          <i className="fa-regular fa-comment fa-xl" />
          <i className="fa-regular fa-paper-plane fa-xl" />
        </div>
        <i className="fa-regular fa-bookmark fa-xl" />
      </div>
      <div>
        좋아요 <span>{isFeedLike ? likeNum + 1 : likeNum}</span>개
      </div>
    </section>
  );
};

export default Interaction;
