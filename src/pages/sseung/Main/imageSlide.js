import Bullet from './Bullet';

const ImageSlide = ({ images }) => {
  const onSlideBtn = e => {
    // const targetPrev = e.target.className.includes('prev');
    const targetNext = e.target.className.includes('next');
    targetNext ? console.log('next') : console.log('prev');
  };

  return (
    <section className="content_slide">
      <div className="arrow_wrap">
        <i
          className="fa-solid fa-circle-chevron-left fa-2xl arrow prev hidden"
          onClick={onSlideBtn}
        />
        <i
          className="fa-solid fa-circle-chevron-left fa-2xl arrow next"
          onClick={onSlideBtn}
        />
      </div>
      <div className="content_wrap">
        <ul>
          {images.map((imgSrc, index) => (
            <li key={index}>
              <img alt={`2번피드 ${index + 1}번째 이미지`} src={imgSrc} />
            </li>
          ))}
        </ul>
      </div>
      <Bullet bulletNum={images.length} />
    </section>
  );
};

export default ImageSlide;
