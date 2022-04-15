// import { useState } from 'react';
import Nav from '../../../components/Nav/Nav';

import Feed from './Feed';
import './Main.scss';
import MainRight from './MainRight';
import StoriesWrap from './StoriesWrap';

const Main = () => {
  const userData = {
    userId: 'mschoise',
    info: '유저이름',
  };
  const feedData = [
    {
      id: 0,
      userId: 'reeeed',
      profileImg: 'images/sseung/profile.jpeg',
      imgSrc: [
        'images/sseung/red/red_1.jpg',
        'images/sseung/red/red_2.jpg',
        'images/sseung/red/red_3.jpg',
      ],
      description: `보송보송 졸귀탱 흰둥이 인형🤍💙 저세상 귀여움이라는 흰둥이 인형ㅠㅠ @@나 이거 사고시포>< \n
            🛍프로필 '데코픽' 링크에 판매 링크 있어요!`,
      comments: [
        { id: 0, user: 'mschoise', text: '댓글쓴다', liked: true },
        { id: 1, user: 'animal', text: '우왕우왕우와아아아앙', liked: false },
      ],
      likeNum: 92,
      liked: false,
    },
    {
      id: 1,
      userId: 'yeeeelow',
      profileImg: 'images/sseung/profile.jpeg',
      imgSrc: [
        'images/sseung/yellow/yellow_1.jpg',
        'images/sseung/yellow/yellow_2.jpg',
        'images/sseung/yellow/yellow_3.jpg',
        'images/sseung/yellow/yellow_4.jpg',
        'images/sseung/yellow/yellow_5.jpg',
        'images/sseung/yellow/yellow_6.jpg',
        'images/sseung/yellow/yellow_7.jpg',
      ],
      description: `퐁신퐁신 수플레팬케이크를 주문즉시 만들어주는 찐 디저트맛집🍓\n
            확 트인 오션뷰를 감상할 수 있는 매장으로, 포토존도 풍성하답니다!\n
            디저트는 수플레, 치즈케이크, 초코푸딩 등 다양해서\n
            취향에 맞게 음료와 같이 즐길 수 있는 카페입니다!😆\n
            커피는 원두 선택이 가능해서 맛있는 커피를 맛 볼 수 있어요!\n
            시즌에 맞춘 다양한 신메뉴를 꾸준히 출시하고 있다는 점👍\n
            봄을 맞이하여 딸기 메뉴를 맛보시는건 어떠실까요?!@@`,
      comments: [
        {
          id: 0,
          user: 'wecode',
          text: '노란색 글에대한 댓글 처음!',
          liked: true,
        },
      ],
      likeNum: 72,
      liked: true,
    },
    {
      id: 2,
      userId: 'piiiiiink',
      profileImg: 'images/sseung/profile.jpeg',
      imgSrc: [
        'images/sseung/pink/pink_1.jpg',
        'images/sseung/pink/pink_2.jpg',
        'images/sseung/pink/pink_3.jpg',
        'images/sseung/pink/pink_4.jpg',
        'images/sseung/pink/pink_5.jpg',
      ],
      description: `아쉬워서 떠나보는 스물다섯 스물하나 촬영지 스팟7💚✨\n
            #전주 에서 촬영이 이뤄진 #스물다섯스물하나\n
            촬영지 모두 공개합니다~🌈\n
            모두 희도,이진이가 되어보자~!\n
            전주제일고등학교에 있는 수돗가에서 촬영은 하지 않고\n
            제일고 안에서 세트로 촬영했다고 힘!🙏🏻\n\n
            @@우리도 여기 가볼까?!\n\n
            🔖전주 #스물다섯스물하나촬영지`,
      comments: [
        {
          id: 0,
          user: 'planner',
          text: '핑크색 글에대한 댓글이지롱!',
          liked: false,
        },
      ],
      likeNum: 103,
      liked: false,
    },
  ];

  const storyData = [
    {
      id: 0,
      userId: 'AAAAA',
      imgSrc: 'images/sseung/profile.jpeg',
      info: 'Instagram 신규 가입',
    },
    {
      id: 2,
      userId: 'BBBB',
      imgSrc: 'images/sseung/profile.jpeg',
      info: 'abcdefg님이 팔로우합니다',
    },
    {
      id: 3,
      userId: 'CCCCCCCC',
      imgSrc: 'images/sseung/profile.jpeg',
      info: 'abcdefg님이 팔로우합니다',
    },
    {
      id: 4,
      userId: 'DDDD',
      imgSrc: 'images/sseung/profile.jpeg',
      info: '칭구칭구',
    },
    {
      id: 5,
      userId: 'EEE',
      imgSrc: 'images/sseung/profile.jpeg',
      info: '칭구칭구',
    },
    {
      id: 6,
      userId: 'FFFFFF',
      imgSrc: 'images/sseung/profile.jpeg',
      info: '칭구칭구',
    },
    {
      id: 7,
      userId: 'GGGGGGGG',
      imgSrc: 'images/sseung/profile.jpeg',
      info: '칭구칭구',
    },
  ];

  return (
    <div>
      <Nav />
      <main>
        <div>
          <section className="feeds">
            <StoriesWrap storyData={storyData} />
            {feedData.map(it => (
              <Feed key={it.id} data={it} />
            ))}
          </section>
          <MainRight userData={userData} recommendData={storyData} />
        </div>
      </main>
    </div>
  );
};

export default Main;
