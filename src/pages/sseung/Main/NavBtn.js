const NavBtn = ({ myData }) => {
  return (
    <div className="nav_btn">
      <i className="fa-solid fa-house fa-xl" />
      <i className="fa-regular fa-paper-plane fa-xl" />
      <i className="fa-solid fa-circle-plus fa-xl" />
      <i className="fa-solid fa-compass fa-xl" />
      <i className="fa-regular fa-heart fa-xl" />
      {myData && (
        <img
          alt="프로필이미지"
          className="profile_img"
          src={myData.profileImg}
        />
      )}
    </div>
  );
};

export default NavBtn;
