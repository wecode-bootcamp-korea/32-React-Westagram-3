const UserProfile = ({ userData, btnClass, btnText }) => {
  return (
    <>
      <div className="user_profile">
        <div className="user_img">
          <img
            alt="프로필이미지"
            src="images/sseung/profile.jpeg"
            className="profile_img"
          />
        </div>
        <div>
          <p className="user_id">{userData.userId}</p>
          <span>{userData.info}</span>
        </div>
      </div>
      <button className={btnClass} href="#">
        {btnText}
      </button>
    </>
  );
};

export default UserProfile;
