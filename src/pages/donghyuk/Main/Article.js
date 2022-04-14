import React, { useState } from 'react';
import AddItemForm from './AddItemForm';
import FeedContent from './FeedContent';
import FeedIconBar from './FeedIconBar';
import FeedLikeBar from './FeedLikeBar';
import './Article.scss';

const Article = props => {
  const [comments, setComments] = useState([
    { id: 0, name: 'gel_fos', text: '덕순이 너무 귀여워요~' },
  ]);

  const onAdd = text => {
    setComments(prev => [...prev, { id: Date.now(), name: 'gel_fos', text }]);
  };

  const onDelete = comment => {
    const newComments = comments.filter(item => item.id !== comment.id);
    setComments(newComments);
  };

  return (
    <article className="main-article">
      <img src="/images/donghyuk/덕순1.jpg" alt="" className="article-img" />
      <FeedIconBar />
      <FeedLikeBar />
      <FeedContent onDelete={onDelete} comments={comments} />
      <AddItemForm onAdd={onAdd} />
    </article>
  );
};

export default Article;
