import Comment from './Comment';

const CommentsBox = props => {
  const commentLikeClassName = liked => {
    return liked ? 'fa-solid' : 'fa-regular';
  };
  return (
    <article className="comments_box">
      <ul className="comments_void">
        {props.commentList.map((item, index) => (
          <Comment
            key={item.id}
            item={item}
            index={index}
            commentLikeClassName={commentLikeClassName}
            onCommentLike={props.onCommentLike}
          />
        ))}
      </ul>
      <div className="comments_all">
        댓글 {props.commentList.length}개{' '}
        <span className="commentsMore">모두 보기</span>
      </div>
      <div className="time">21시간 전</div>
    </article>
  );
};

export default CommentsBox;
