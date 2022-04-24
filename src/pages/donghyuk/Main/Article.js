import React, { useEffect, useState } from 'react';
import AddCommentForm from './AddCommentForm';
import FeedContent from './FeedContent';
import FeedIconBar from './FeedIconBar';
import FeedLikeBar from './FeedLikeBar';
import './Article.scss';

const Article = ({ profileInfo: { userName }, feedInfo }) => {
  const [comments, setComments] = useState(feedInfo.comment);

  useEffect(() => {
    setComments(feedInfo.comment);
  }, [feedInfo.comment]);

  const onAdd = content => {
    setComments(prev => [
      ...prev,
      { commentId: Date.now(), userName, content },
    ]);
  };

  const onDelete = comment => {
    const newComments = comments.filter(
      item => item.commentId !== comment.commentId
    );
    setComments(newComments);
  };

  return (
    <article className="article">
      <img src={feedInfo.articlImgUrl} alt="" className="article-img" />
      <FeedIconBar />
      <FeedLikeBar />
      <FeedContent
        onDelete={onDelete}
        feedInfo={feedInfo}
        comments={comments}
      />
      <AddCommentForm onAdd={onAdd} />
    </article>
  );
};

export default Article;
