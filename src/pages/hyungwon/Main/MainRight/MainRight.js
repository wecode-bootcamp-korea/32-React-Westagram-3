import React from 'react';
import '../MainRight/MainRight.scss';
const MainRight = () => {
  return (
    <div id="aside" className="right">
      <div className="myProfile_info">
        <img
          src="/images/hyungwon/myProfilePhoto.jpg"
          alt="myProfilePhoto"
          className="profile_photo_info"
        />
        <div className="p_tag">
          <p className="wkdguddnjs">wkdguddnjs</p>
          <p className="down">WeCode | 위코드</p>
        </div>
      </div>

      <div className="uploaded_stories">
        <div className="stories_top">
          <p className="story">스토리</p>
          <p className="see_all">모두보기</p>
        </div>
        <div className="stories_list">
          <div className="list">
            <img
              src="/images/hyungwon/list_1.jpg"
              alt="list_1"
              className="list_left"
            />
            <div className="list_right">
              <p className="list_name">aptx4869</p>
              <p className="list_time">18분 전</p>
            </div>
          </div>
          <div className="list">
            <img
              src="/images/hyungwon/list_2.jpg"
              alt="list_2"
              className="list_left"
            />
            <div className="list_right">
              <p className="list_name">korea</p>
              <p className="list_time">41분 전</p>
            </div>
          </div>
          <div className="list">
            <img
              src="/images/hyungwon/list_3.jpg"
              alt="list_3"
              className="list_left"
            />
            <div className="list_right">
              <p className="list_name">coding</p>
              <p className="list_time">19시간 전</p>
            </div>
          </div>
          <div className="list">
            <img
              src="/images/hyungwon/list_4.jpg"
              alt="list_4"
              className="list_left"
            />
            <div className="list_right">
              <p className="list_name">someThing</p>
              <p className="list_time">4시간 전</p>
            </div>
          </div>
          <div className="list">
            <img
              src="/images/hyungwon/list_4.jpg"
              alt="list_4"
              className="list_left"
            />
            <div className="list_right">
              <p className="list_name">someThing</p>
              <p className="list_time">4시간 전</p>
            </div>
          </div>
        </div>
      </div>
      <div className="recommanded">
        <div className="recommanded_top">
          <p className="recommanded_top_right">회원님을 위한 추천</p>
          <p className="recommanded_top_left">모두 보기</p>
        </div>
        <div className="recommanded_bottom">
          <div className="recommanded_list">
            <div className="recommanded_left">
              <div className="recommanded_profile">
                <img
                  src="/images/hyungwon/list_1.jpg"
                  alt="list_1"
                  className="recommanded_photo"
                />
                <div className="recommanded_text">
                  <p className="recommanded_name">map_function</p>
                  <p className="recommanded_p">VS님 외 몇명이 팔로우...</p>
                </div>
              </div>
              <a
                href="/"
                className="follow"
                onClick={e => {
                  e.preventDefault();
                }}
              >
                팔로우
              </a>
            </div>
          </div>
          <div className="recommanded_list">
            <div className="recommanded_left">
              <div className="recommanded_profile">
                <img
                  src="/images/hyungwon/list_2.jpg"
                  alt="list_2"
                  className="recommanded_photo"
                />
                <div className="recommanded_text">
                  <p className="recommanded_name">Object</p>
                  <p className="recommanded_p">function님 외 몇명이...</p>
                </div>
              </div>
              <a
                href="/"
                className="follow"
                onClick={e => {
                  e.preventDefault();
                }}
              >
                팔로우
              </a>
            </div>
          </div>
          <div className="recommanded_list">
            <div className="recommanded_left">
              <div className="recommanded_profile">
                <img
                  src="/images/hyungwon/list_3.jpg"
                  alt="list_3"
                  className="recommanded_photo"
                />
                <div className="recommanded_text">
                  <p className="recommanded_name">Array</p>
                  <p className="recommanded_p">length님 외 몇명이 팔...</p>
                </div>
              </div>
              <a
                href="/"
                className="follow"
                onClick={e => {
                  e.preventDefault();
                }}
              >
                팔로우
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="insta_info">
        <p className="info_top">
          Instagram 정보 ∙ 지원 ∙ 홍보 센터 ∙ API ∙ 채용 정보 ∙ <br />
          개인정보처리방침 ∙ 약관 ∙ 디렉터리 ∙ 프로필 ∙ 해시태그 ∙ 언어
        </p>
        <p className="info_bottom">© 2019 INSTAGRAM</p>
      </div>
    </div>
  );
};

export default MainRight;
