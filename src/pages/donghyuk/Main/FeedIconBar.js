import React from 'react';
import './FeedIconBar.scss';

const FeedIconBar = props => {
  return (
    <section className="feedIcon">
      <div className="feedIcon-left">
        <button className="feedIcon-heart">
          <i className="far fa-heart" />
        </button>
        <button className="feedIcon-comment">
          <i className="far fa-comment" />
        </button>
        <button className="feedIcon-upload">
          <i className="fas fa-external-link-alt" />
        </button>
      </div>
      <button className="feedIcon-bookmark">
        <i className="far fa-bookmark" />
      </button>
    </section>
  );
};

export default FeedIconBar;
