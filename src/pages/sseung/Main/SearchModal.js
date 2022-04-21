import { useEffect, useState } from 'react';
import SearchUserProfile from './components/SearchUserProfile';

const SearchModal = ({ searchOpen, close }) => {
  const [latelySearchData, setLatelySearchData] = useState([
    { id: 0, userId: 'banana', info: '붜내너는 노랭이' },
    { id: 1, userId: 'apple', info: '유사과' },
    { id: 2, userId: 'kitkat', info: '킷캣맛있지롱' },
    { id: 3, userId: 'CherryBlossom', info: '보고싶다' },
    { id: 4, userId: 'gangnam', info: '강남이다' },
  ]);

  const removeList = index => {
    console.log('클릭');
    setLatelySearchData([...latelySearchData.filter(x => x.id !== index)]);
  };

  useEffect(() => {
    const newData = latelySearchData.map((it, index) => ({
      ...it,
      id: index,
    }));
    setLatelySearchData(newData);
  }, [latelySearchData.length]);

  return searchOpen ? (
    <div className="modal-backdrop" onClick={() => close()}>
      <section
        className={`userSearch_wrap ${searchOpen ? '' : 'hidden'}`}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div>
          <p>
            <span>최근 검색 항목</span>
            <button className="link_blue">모두 지우기</button>
          </p>
          <div className="searched_user">
            {latelySearchData.map((item, index) => (
              <article key={index} data-id={index}>
                <SearchUserProfile
                  index={index}
                  userData={item}
                  removeList={removeList}
                  btnText={<i className="fa-solid fa-xmark fa-2xl remove" />}
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  ) : null;
};

export default SearchModal;
