import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import { useState } from 'react';

function Main() {
  const [conmment, setComment] = useState('');
  const [conmmentArrary, setCommentArray] = useState([]);

  const handleReviewInput = event => {
    setComment(event.target.value); // 인풋값 계속 리로드
  };

  const handleTotalEnter = e => {
    e.preventDefault();
    //const plusArray = [...conmmentArrary]; // 지금까지 배열을 저장한다.
    if (conmment !== '') {
      setCommentArray(prev => [
        ...prev,
        { conmment: conmment, id: '_heejun_' },
      ]);
      //plusArray.push({ id: '_heejuun_', conmment: conmment }); // 빈 값이 아니면  plusArray에 푸쉬한다.
      //setCommentArray(plusArray); // 새로운 값으로 저장한다.
    }
    setComment(''); // 이미 저장된 댓글은 지운다.
  };

  return (
    <div className="wrap">
      <Nav />
      <main className="containerMain">
        <div className="feeds">
          <div className="feed-header">
            <img alt="피드 프로필 이미지" src="/images/heejun/IMG_0070.JPG" />
            <span className="feed-header-myName">_heejuun_</span>
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
              <span>___e.be</span>
              <span>님</span>
              <span>외 43명</span>
              <span>이 좋아합니다</span>
            </div>

            <div className="comment-wrap">
              <div className="comment">
                <div>
                  <span className="comment-myname">_heejuun_</span>
                  <span> 아르떼 뮤지엄에서 찰칵 📸...</span>
                  <span className="conmment-plus">더보기</span>
                </div>
              </div>
              <ul className="comment-push">
                {conmmentArrary.map((item, index) => {
                  return (
                    <li key={index}>
                      <span className="id-value">{item.id}</span>
                      <span className="comment-value">{item.conmment}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="comment-list-wrap" />
              <form className="comment-action-wrap" onSubmit={handleTotalEnter}>
                <input
                  className="comment-input"
                  type="text"
                  placeholder="댓글달기..."
                  value={conmment}
                  onChange={handleReviewInput}
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
                  src="/images/heejun/IMG_0069.JPG"
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
                src="/images/heejun/IMG_0074.jpg"
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
                src="/images/heejun/IMG_0071.jpg"
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
                <img src="" alt="" />
                <div className="find-friends-name">
                  <span>joooooa__</span>
                  <span>__e.be님 외 2명이...</span>
                </div>
                <div className="fallow">
                  <span>팔로우</span>
                </div>
              </div>
              <div className="find-friends">
                <img src="" alt="" />
                <div className="find-friends-name">
                  <span>wecode_</span>
                  <span>json_님 외 4명이...</span>
                </div>
                <div className="fallow">
                  <span>팔로우</span>
                </div>
              </div>
              <div className="find-friends">
                <img src="" alt="" />
                <div className="find-friends-name">
                  <span>dlgmlwns117</span>
                  <span>__e.be님 외 1명이...</span>
                </div>
                <div className="fallow">
                  <span>팔로우</span>
                </div>
              </div>
              <div className="find-friends">
                <img src="" alt="" />
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
      </main>
    </div>
  );
}

export default Main;
