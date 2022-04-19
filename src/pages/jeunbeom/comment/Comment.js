import React from 'react';

const Comment = ({ commentContainer }) => {
  return (
    commentContainer &&
    commentContainer.map(e => {
      return (
        <div className="comment" key={e.id}>
          <p>
            <b
              className="commentUser"
              style={{ fontWeight: 'bold', marginLeft: 30, marginRight: 5 }}
            >
              {e.userName}
            </b>
            {e.content}
          </p>
        </div>
      );
    })
  );
};

export default Comment;
