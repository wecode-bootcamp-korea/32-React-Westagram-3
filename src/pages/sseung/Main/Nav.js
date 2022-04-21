import NavBtn from './NavBtn';
import SearchBar from './SearchBar';

const Nav = ({ myData }) => {
  return (
    <nav>
      <div>
        <div className="main_logo">
          <h1>westargram</h1>
        </div>
        <SearchBar />
        <NavBtn myData={myData} />
      </div>
    </nav>
  );
};

export default Nav;
