import { useRef, useState } from 'react';
import NavBtn from './NavBtn';

const Nav = ({ myData }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef();

  const onSearchbarClick = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <nav>
      <div>
        <div className="main_logo">
          <h1>westargram</h1>
        </div>
        <div className="search_bar">
          <section
            ref={inputRef}
            className={`userSearch_wrap ${searchOpen ? '' : 'hidden'}`}
          >
            <p>
              <span>최근 검색 항목</span>
              <button className="link_blue">모두 지우기</button>
            </p>
            <div className="searched_user" />
          </section>
          <input
            className="search_input"
            type="text"
            placeholder="검색"
            onClick={onSearchbarClick}
          />
          <div className="search_input not_focus">
            <i className="fa-solid fa-magnifying-glass fa-xl serch_icon" />
            <p>
              <span>검색</span>
              <i className="fa-solid fa-circle-xmark reset" />
            </p>
          </div>
        </div>
        <NavBtn myData={myData} />
      </div>
    </nav>
  );
};

export default Nav;
