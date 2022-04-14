// import { useEffect, useState } from 'react';

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

  // console.log(data);

  return (
    <section className="contents_wrap">
      <article className="contents">
        <span className="user_id">{data.userId}</span>
        <span className="description">
          {data.description.split('\n').map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </span>
        <div className="more_des">더 보기</div>
      </article>
      <article className="comments_box">
        <ul className="comments_void">
          {commentList.map((it, index) => {
            return (
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
            );
          })}
        </ul>
        <div className="comments_all">댓글 {data.length}개 모두 보기</div>
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
