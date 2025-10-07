import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [currentImage, setCurrentImage] = useState([]);
  const [imageSlide, setImageSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePrev = () => {
    setImageSlide(imageSlide === 0 ? currentImage.length - 1 : imageSlide - 1);
  };

  const handleNext = () => {
    setImageSlide(imageSlide === currentImage.length - 1 ? 0 : imageSlide + 1);
  };

  const fetchImage = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      console.log(data);
      if (data) {
        setCurrentImage(data);
        setLoading(null);
      }
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImage(url);
  }, [url]);

  if (loading) {
    return <div>Please Wait while the images are loading</div>;
  }
  if (error !== null) {
    return <div>Error Occured {error}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={() => handlePrev()}
      />
      {currentImage && currentImage.length
        ? currentImage.map((imageItem, index) => (
            <img
              key={imageItem.index}
              alt={imageItem.author}
              src={imageItem.download_url}
              className={
                imageSlide === index
                  ? "current-slide"
                  : "current-slide hide-slide"
              }
            />
          ))
        : null}

      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={() => handleNext()}
      />
      <span className="circle-indicators">
        {currentImage && currentImage.length
          ? currentImage.map((_, index) => (
              <button
                key={index}
                className={
                  imageSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setImageSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
