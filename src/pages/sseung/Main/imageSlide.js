import React, { useEffect, useRef, useState } from 'react';
import Bullet from './Bullet';

const ImageSlide = ({ images }) => {
  const [imgNum, setImgNum] = useState(0);
  const [slideX, setSlideX] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const slideRef = useRef();
  const prevBtnRef = useRef();
  const nextBtnRef = useRef();

  useEffect(() => {
    setImgWidth(document.querySelector('.content_wrap li').clientWidth);
    setSlideX(-(imgWidth * imgNum));
    imgNum === 0
      ? prevBtnRef.current.classList.add('hidden')
      : prevBtnRef.current.classList.remove('hidden');

    imgNum === images.length - 1
      ? nextBtnRef.current.classList.add('hidden')
      : nextBtnRef.current.classList.remove('hidden');
  }, [imgNum]);

  const moveSlide = e => {
    let nowImgNum = imgNum;
    if (e.target.className.includes('next') && nowImgNum < images.length - 1) {
      setImgNum(++nowImgNum);
    }
    if (e.target.className.includes('prev') && nowImgNum >= 0) {
      setImgNum(--nowImgNum);
    }
  };

  return (
    <section className="content_slide">
      <div className="arrow_wrap">
        <i
          ref={prevBtnRef}
          className="fa-solid fa-circle-chevron-left fa-2xl arrow prev"
          onClick={e => moveSlide(e)}
        />
        <i
          ref={nextBtnRef}
          className="fa-solid fa-circle-chevron-left fa-2xl arrow next"
          onClick={e => moveSlide(e)}
        />
      </div>
      <div className="content_wrap">
        <ul ref={slideRef} style={{ transform: `translateX(${slideX}px)` }}>
          {images.map((imgSrc, index) => (
            <li data-num={index} key={index}>
              <img alt={`2번피드 ${index + 1}번째 이미지`} src={imgSrc} />
            </li>
          ))}
        </ul>
      </div>
      <Bullet bulletNum={images.length} imgNum={imgNum} />
    </section>
  );
};

export default ImageSlide;
