import './Main.scss';
import Nav from '../../../components/Nav/Nav';

function Main() {
  return (
    <div class="wrap">
      <Nav />
      <main className="containerMain">
        <div className="feeds">
          <div className="feed-header">
            <img alt="피드 프로필 이미지" src="/images/heejun/IMG_0070.JPG" />
            <a className="feed-header-myName" href="">
              _heejuun_
            </a>
          </div>

          <article className="article">
            <img
              alt="피드 본문 이미지"
              src="/images/heejun/97BD93F8-9568-4F88-B209-FD72E61BED7C.JPG"
              className="feed-Img"
            />
            <div className="feed-nav">
              <div className="feed-nav-left">
                <i className="fa-solid fa-heart" />
                <i className="fa-solid fa-comment" />
                <i className="fa-solid fa-arrow-up-from-bracket" />
              </div>
              <div className="feed-nav-right">
                <i className="fa-solid fa-bookmark" />
              </div>
            </div>
            <div className="heart-count">
              <div>
                <img
                  alt="좋아요 누른 사람 프로필 사진"
                  src="/images/heejun/IMG_0069.JPG"
                />
              </div>
              <a>___e.be</a>
              <span>님</span>
              <a href="">외 43명</a>
              <span>이 좋아합니다</span>
            </div>

            <div className="comment-wrap">
              <div className="comment">
                <div>
                  <a href="">_heejuun_</a>
                  <span> 아르떼 뮤지엄에서 찰칵 📸...</span>
                  <span className="conmment-plus">더보기</span>
                </div>
              </div>
              <div className="comment-list-wrap" />
              <form className="comment-action-wrap">
                <input
                  className="comment-input"
                  type="text"
                  placeholder="댓글달기..."
                />
                <div className="comment-btn">
                  <button>게시</button>
                </div>
              </form>
            </div>
          </article>
        </div>

        <div className="main-right">
          <div className="main-right-header">
            <img alt="내 프로필" src="/images/heejun/IMG_0070.JPG" />
            <div className="main-right-myname">
              <a href="">_heejuun_</a>
              <span>희준</span>
            </div>
          </div>

          <div className="right-top">
            <div className="right-top-header">
              <span>스토리</span>
              <a href="">모두 보기</a>
            </div>
            <div className="story-warrap">
              <div className="story">
                <img
                  alt="__e.be님의  프로필 사진"
                  src="/images/heejun/IMG_0069.JPG"
                />
                <div className="story-name">
                  <a href="">__e.be</a>
                  <span>16분전</span>
                </div>
              </div>
            </div>
            <div className="story">
              <img
                alt="junhyeo_k_님의  프로필 사진"
                src="/images/heejun/IMG_0074.jpg"
              />
              <div className="story-name">
                <a href="">junhyeo_k_</a>
                <span>24분전</span>
              </div>
            </div>
            <div className="story">
              <img
                alt="g_cova님의 프로필 사진"
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
              />
              <div className="story-name">
                <a href="">g_cova</a>
                <span>32분전</span>
              </div>
            </div>
            <div className="story">
              <img
                alt="_chickenmoo_님의 프로필 사진"
                src="/images/heejun/IMG_0071.jpg"
              />
              <div className="story-name">
                <a href="">_chickenmoo_</a>
                <span>1시간전</span>
              </div>
            </div>
          </div>
          <div className="right-bottom">
            <div className="right-bottom-header">
              <span>회원님을 위한 추천</span>
              <a href="">모두 보기</a>
            </div>
            <div className="fallow-warrap">
              <div className="find-friends">
                <img src="" alt="" />
                <div className="find-friends-name">
                  <a href="">joooooa__</a>
                  <span>__e.be님 외 2명이...</span>
                </div>
                <div className="fallow">
                  <a href="">팔로우</a>
                </div>
              </div>
              <div className="find-friends">
                <img src="" alt="" />
                <div className="find-friends-name">
                  <a href="">wecode_</a>
                  <span>json_님 외 4명이...</span>
                </div>
                <div className="fallow">
                  <a href="">팔로우</a>
                </div>
              </div>
              <div className="find-friends">
                <img src="" alt="" />
                <div className="find-friends-name">
                  <a href="">dlgmlwns117</a>
                  <span>__e.be님 외 1명이...</span>
                </div>
                <div className="fallow">
                  <a href="">팔로우</a>
                </div>
              </div>
              <div className="find-friends">
                <img src="" alt="" />
                <div className="find-friends-name">
                  <a href="">__970806__</a>
                  <span>__e.be님 외 2명이...</span>
                </div>
                <div className="fallow">
                  <a href="">팔로우</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
