const UserProfile = ({ index, userData, removeList }) => {
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
        <div className="user_idNname">
          <p className="user_id">{userData.userId}</p>
          <span>{userData.info}</span>
        </div>
      </div>
      <button className="userRemove" href="#">
        <i
          className="fa-solid fa-xmark fa-2xl remove"
          onClick={() => removeList(index)}
        />
      </button>
    </>
  );
};

export default UserProfile;
