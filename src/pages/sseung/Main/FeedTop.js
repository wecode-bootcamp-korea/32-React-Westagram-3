const FeedTop = ({ profile, userId }) => {
  return (
    <section className="feed_top">
      <div className="user_id">
        <div className="user_img">
          <img alt="피드 프로필 이미지" src={profile} className="profile_img" />
        </div>
        <span>{userId}</span>
      </div>
      <i className="fa-solid fa-ellipsis fa-xl option" />
    </section>
  );
};

export default FeedTop;
