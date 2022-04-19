import React, { useState } from 'react';

const ContentsWrap = ({ data }) => {
  const splitDescription = data.description.split(`
`)[0];

  const [Descrip, setDescrip] = useState(splitDescription);

  const [hidden, setHidden] = useState('');

  const onMoreDes = () => {
    setDescrip(
      data.description
        .split('\n')
        .map((line, i) => (i === 0 && line) || <div key={i}>{line}</div>)
    );
    setHidden('hidden');
  };

  return (
    <article className="contents_wrap">
      <span className="user_id">{data.userId}</span>
      <span className="description">{Descrip}</span>
      <div className={`more_des ${hidden}`} onClick={onMoreDes}>
        더 보기
      </div>
    </article>
  );
};

export default ContentsWrap;
