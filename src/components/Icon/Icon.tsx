import React from 'react';
import './Icon.scss';
import { IIconProps } from '../../utils/types';

const Icon: React.FC<IIconProps> = ({
  isSocial = false,
  className,
  iconName,
}) => {
  const link = `/images/${
    isSocial ? 'SocialSprite.svg' : 'IconsSprite.svg'
  }#${iconName.toLowerCase()}`;
  return (
    <svg id={iconName.toLowerCase()} className={className}>
      <use xlinkHref={link} />
    </svg>
  );
};

export default Icon;
