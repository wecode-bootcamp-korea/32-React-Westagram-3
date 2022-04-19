import React from 'react';

const Bullet = ({ bulletNum, imgNum }) => {
  const liElement = Array(bulletNum)
    .fill(0)
    .map((item, index) => {
      return index === imgNum ? (
        <li key={index} id={index} className="nowImg" />
      ) : (
        <li key={index} id={index} />
      );
    });

  return <ul className="bullet">{liElement}</ul>;
};

export default Bullet;
