import React from 'react';
import './Icon.scss';
import { IIconProps } from '../../utils/types';

const Icon: React.FC<IIconProps> = ({ isSocial = false, iconName }) => {
  const spriteLink = `images/${
    isSocial ? 'SocialSprite.svg' : 'IconsSprite.svg'
  }#${iconName.toLowerCase()}`;
  return (
    <svg id={iconName.toLowerCase()}>
      <use xlinkHref={spriteLink} />
    </svg>
  );
};

export default Icon;
