const CommentsBox = ({ commentList, onRemoveComment, onCommentLike }) => {
  const commentLikeClassName = liked => {
    return liked ? 'fa-solid' : 'fa-regular';
  };

  return (
    <article className="comments_box">
      <ul className="comments_void">
        {commentList.map((it, index) => (
          <li key={it.id} className="comment">
            <div>
              <span className="comment_id">{it.user}</span>
              <span className="commment_text">{it.text}</span>
            </div>
            <div>
              <i
                className="fa-solid fa-trash-can remove"
                onClick={() => {
                  onRemoveComment(index);
                }}
              />
              <label>
                <i
                  className={`${commentLikeClassName(it.liked)} fa-heart like`}
                  onClick={() => onCommentLike(index)}
                />
                <input type="checkbox" />
              </label>
            </div>
          </li>
        ))}
      </ul>
      <div className="comments_all">
        댓글 {commentList.length}개{' '}
        <span className="commentsMore">모두 보기</span>
      </div>
      <div className="time">21시간 전</div>
    </article>
  );
};

export default CommentsBox;
