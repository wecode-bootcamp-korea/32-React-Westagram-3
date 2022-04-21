const SearchModal = ({ searchOpen, close }) => {
  return searchOpen ? (
    <div className="modal-backdrop" onClick={() => close()}>
      <section
        className={`userSearch_wrap ${searchOpen ? '' : 'hidden'}`}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <p>
          <span>최근 검색 항목</span>
          <button className="link_blue">모두 지우기</button>
        </p>
        <div className="searched_user" />
      </section>
    </div>
  ) : null;
};

export default SearchModal;
