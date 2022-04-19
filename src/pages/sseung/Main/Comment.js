const Comment = ({
  item,
  index,
  onRemoveComment,
  onCommentLike,
  commentLikeClassName,
}) => {
  return (
    <li className="comment">
      <div>
        <span className="comment_id">{item.user}</span>
        <span className="commment_text">{item.text}</span>
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
            className={`${commentLikeClassName(item.liked)} fa-heart like`}
            onClick={() => {
              onCommentLike(index);
            }}
          />
          <input type="checkbox" />
        </label>
      </div>
    </li>
  );
};

export default Comment;
