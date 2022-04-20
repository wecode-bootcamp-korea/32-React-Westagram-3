import React from 'react';
import '../Components/Aside.scss';
export default function Aside() {
  return (
    <section>
      <div className="main-right">
        <div className="main-right-header">
          <img alt="내 프로필" src="/images/heejun/IMG_0813.JPG" />
          <div className="main-right-myname">
            <span>_heejuun_</span>
            <span>희준</span>
          </div>
        </div>

        <div className="right-top">
          <div className="right-top-header">
            <span>스토리</span>
            <span>모두 보기</span>
          </div>
          <div className="story-warrap">
            <div className="story">
              <img
                alt="__e.be님의  프로필 사진"
                src="/images/heejun/IMG_0812.JPG"
              />
              <div className="story-name">
                <span>__e.be</span>
                <span>16분전</span>
              </div>
            </div>
          </div>
          <div className="story">
            <img
              alt="junhyeo_k_님의  프로필 사진"
              src="/images/heejun/IMG_0819.jpg"
            />
            <div className="story-name">
              <span>junhyeo_k_</span>
              <span>24분전</span>
            </div>
          </div>
          <div className="story">
            <img
              alt="g_cova님의 프로필 사진"
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
            />
            <div className="story-name">
              <span>g_cova</span>
              <span>32분전</span>
            </div>
          </div>
          <div className="story">
            <img
              alt="_chickenmoo_님의 프로필 사진"
              src="/images/heejun/IMG_0818.jpg"
            />
            <div className="story-name">
              <span>_chickenmoo_</span>
              <span>1시간전</span>
            </div>
          </div>
        </div>
        <div className="right-bottom">
          <div className="right-bottom-header">
            <span>회원님을 위한 추천</span>
            <span>모두 보기</span>
          </div>
          <div className="fallow-warrap">
            <div className="find-friends">
              <img src="/images/heejun/IMG_0069.JPG" alt="" />
              <div className="find-friends-name">
                <span>joooooa__</span>
                <span>__e.be님 외 2명이...</span>
              </div>
              <div className="fallow">
                <span>팔로우</span>
              </div>
            </div>
            <div className="find-friends">
              <img src="/images/heejun/IMG_0070.JPG" alt="" />
              <div className="find-friends-name">
                <span>wecode_</span>
                <span>json_님 외 4명이...</span>
              </div>
              <div className="fallow">
                <span>팔로우</span>
              </div>
            </div>
            <div className="find-friends">
              <img src="/images/heejun/IMG_0815.JPG" alt="" />
              <div className="find-friends-name">
                <span>dlgmlwns117</span>
                <span>__e.be님 외 1명이...</span>
              </div>
              <div className="fallow">
                <span>팔로우</span>
              </div>
            </div>
            <div className="find-friends">
              <img src="/images/heejun/IMG_0814.JPG" alt="" />
              <div className="find-friends-name">
                <span>__970806__</span>
                <span>__e.be님 외 2명이...</span>
              </div>
              <div className="fallow">
                <span>팔로우</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
