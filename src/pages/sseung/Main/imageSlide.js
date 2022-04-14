const ImageSlide = ({ images }) => {
  return (
    <section className="content_slide">
      <div className="arrow_wrap">
        <i className="fa-solid fa-circle-chevron-left fa-2xl arrow prev hidden" />
        <i className="fa-solid fa-circle-chevron-left fa-2xl arrow next" />
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
      <ul className="bullet" />
    </section>
  );
};

export default ImageSlide;
