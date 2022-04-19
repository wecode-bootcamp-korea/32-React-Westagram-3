import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import { useState, useEffect } from 'react';
import FeedHeader from '../Components/FeedHeader';
import FeedNav from '../Components/FeedNav';
import FeedHeartCount from '../Components/FeedHeartCount';
import CommentWrap from '../Components/CommentWrap';
import FeedImg from '../Components/FeedImg';

function Main() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feed.json', {
      method: 'GET',
      // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        setFeed(data.item); //item으로 받아오는 이유는 json파일 배열 이름이 item임
      });
  }, []);
  // 원래코드 //

  // const handleReviewInput = event => {
  //   setComment(event.target.value); // 인풋값 계속 리로드
  // };

  // const handleTotalEnter = e => {
  //   e.preventDefault();

  //   // const plusArray = [...commentArrary]; // 지금까지 배열을 저장한다.
  //   // plusArray.push({ id: '_heejuun_', comment: comment }); // 빈 값이 아니면  plusArray에 푸쉬한다
  //   if (comment.trim() !== '') {
  //     setCommentArray(prev => [
  //       ...prev,
  //       { id: Date.now(), comment: comment, userName: '_heejun_' },
  //     ]);
  //     // setCommentArray(plusArray); // 새로운 값으로 저장한다.
  //   }
  //   setComment(''); // 이미 저장된 댓글은 지운다.
  // };

  return (
    <div className="wrap">
      <Nav />

      <main className="containerMain">
        <article>
          {feed.map(item => (
            <div key={item.feedsId} className="feeds">
              <FeedHeader feedHeader={item.feedsInfo} />
              <article className="article">
                <FeedImg feedImg={item.feedsInfo} />
                <FeedNav />
                <FeedHeartCount />
                <CommentWrap
                  // onChange={handleReviewInput}
                  // value={comment}
                  arr={item.feedsInfo.article.comment}
                  // onSubmit={handleTotalEnter}
                />
              </article>
            </div>
          ))}
        </article>
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
      </main>
    </div>
  );
}

export default Main;
