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
  }#${iconName}`;
  return (
    <svg className={className}>
      <use xlinkHref={link} />
    </svg>
  );
};

export default Icon;
