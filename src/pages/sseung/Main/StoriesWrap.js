const StoriesWrap = ({ storyData }) => {
  return (
    <article className="stories_wrap">
      <ul className="stories">
        {storyData.map((item, index) => (
          <li key={item.id} className="story">
            <div className="user_img">
              <div className="profile_img">
                <img alt="storyUserImg" src={item.imgSrc} />
              </div>
            </div>
            <p>{item.userId}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default StoriesWrap;
