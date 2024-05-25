import { useSwipeable } from 'react-swipeable';
import { ISliderProps } from '../../utils/types';
import './Slider.scss';

import React, { useEffect, useRef, useState } from 'react';

const Slider: React.FC<ISliderProps> = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  // return <img className="slider" src={photos[1]} alt="" />;
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${-100 * currentImage}%)`;
    }
  }, [currentImage]);

  const handlePrev = () => {
    if (currentImage > 0) {
      setCurrentImage((prevImage) => prevImage - 1);
    }
  };

  const handleNext = () => {
    if (currentImage < photos.length - 1) {
      setCurrentImage((prevImage) => prevImage + 1);
    }
  };
  const handlerSwipe = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="slider" {...handlerSwipe}>
      <div ref={sliderRef} className="slider__container">
        {photos.map((item) => (
          <img
            loading={'lazy'}
            className="slider__image"
            key={item}
            src={item}
            alt=""
          />
        ))}
      </div>

      <div className="slider__pagination">
        {photos.map((item, idx) => (
          <div
            key={`pagination_${item}`}
            className={`slider__pagination-item ${
              idx === currentImage ? 'slider__pagination-item_current' : ''
            }`}
            onClick={() => {
              setCurrentImage(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
