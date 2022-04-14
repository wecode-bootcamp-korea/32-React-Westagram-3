const MainRight = () => {
  return (
    <section className="main_right">
      <article className="myInfo">
        <div className="user_profile">
          <div className="user_img">
            <img
              alt="프로필이미지"
              src="images/sseung/profile.jpeg"
              className="profile_img"
            />
          </div>
          <div>
            <p className="user_id">유저아이디</p>
            <span className="user_name">유저이름</span>
          </div>
        </div>
        <button className="link_blue" href="#">
          전환
        </button>
      </article>
      <article className="recommend">
        <p>
          <span>회원님을 위한 추천</span>
          <button href="#">모두 보기</button>
        </p>
        <ul className="users">
          <li className="user">
            <div className="user_profile">
              <div className="user_img">
                <div className="profile_img" />
              </div>
              <div className="user_id_wrap">
                <button>mschoise</button>
                <span>Instagram 신규 가입</span>
              </div>
            </div>
            <button className="follow_btn link_blue">팔로우</button>
          </li>
          <li className="user">
            <div className="user_profile">
              <div className="user_img">
                <div className="profile_img" />
              </div>
              <div className="user_id_wrap">
                <button>mschoise</button>
                <span>abcdefg님이 팔로우합니다</span>
              </div>
            </div>
            <button className="follow_btn link_blue">팔로우</button>
          </li>
          <li className="user">
            <div className="user_profile">
              <div className="user_img">
                <div className="profile_img" />
              </div>
              <div className="user_id_wrap">
                <button>mschoise</button>
                <span>abcdefg님이 팔로우합니다</span>
              </div>
            </div>
            <button className="follow_btn link_blue">팔로우</button>
          </li>
          <li className="user">
            <div className="user_profile">
              <div className="user_img">
                <div className="profile_img" />
              </div>
              <div className="user_id_wrap">
                <button>mschoise</button>
                <span>abcdefg님이 팔로우합니다</span>
              </div>
            </div>
            <button className="follow_btn link_blue">팔로우</button>
          </li>
          <li className="user">
            <div className="user_profile">
              <div className="user_img">
                <div className="profile_img" />
              </div>
              <div className="user_id_wrap">
                <button>mschoise</button>
                <span>abcdefg님이 팔로우합니다</span>
              </div>
            </div>
            <button className="follow_btn link_blue">팔로우</button>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default MainRight;
