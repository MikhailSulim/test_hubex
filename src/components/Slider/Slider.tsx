import { ISliderProps } from '../../utils/types';
import './Slider.scss';

import React from 'react';

const Slider: React.FC<ISliderProps> = ({ photos }) => {
  return <img className="slider" src={photos[1]} alt="" />;
};

export default Slider;
