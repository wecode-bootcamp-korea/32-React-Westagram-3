import React, { useState } from 'react';

const Contents = ({
  data,
  commentList,
  commentText,
  onComment,
  onCommentSubmit,
  onRemoveComment,
  onCommentLike,
}) => {
  const commentLikeClassName = liked => {
    return liked ? 'fa-solid' : 'fa-regular';
  };
  const splitDescription = data.description.split(`
`)[0];

  const [Descrip, setDescrip] = useState(splitDescription);

  const [hidden, setHidden] = useState('');

  const onMoreDes = () => {
    setDescrip(
      data.description
        .split('\n')
        .map((line, i) => line || <div key={i}>{line}</div>)
    );
    setHidden('hidden');
  };

  return (
    <section className="contents_wrap">
      <article className="contents">
        <span className="user_id">{data.userId}</span>
        <span className="description">{Descrip}</span>
        <div className={`more_des ${hidden}`} onClick={onMoreDes}>
          더 보기
        </div>
      </article>
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
                    className={`${commentLikeClassName(
                      it.liked
                    )} fa-heart like`}
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
