import CommentsBox from './CommentsBox';
import ContentsWrap from './ContentsWrap';

const Contents = ({
  data,
  commentList,
  commentText,
  onComment,
  onCommentSubmit,
  onRemoveComment,
  onCommentLike,
}) => {
  return (
    <section className="contents">
      <ContentsWrap data={data} />
      <CommentsBox
        commentList={commentList}
        onRemoveComment={onRemoveComment}
        onCommentLike={onCommentLike}
      />
      <form className="comment_form" onSubmit={onCommentSubmit}>
        <i className="fa-regular fa-face-smile fa-xl icon_btn" />
        <input
          className="comment_input"
          type="text"
          placeholder="댓글 달기..."
          value={commentText}
          onInput={onComment}
        />
        <button
          className="comment_post link_blue"
          disabled={commentText.trim(' ') ? false : true}
        >
          게시
        </button>
      </form>
    </section>
  );
};

export default Contents;
