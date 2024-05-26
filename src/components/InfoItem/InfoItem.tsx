import { IInfoItemProps } from '../../utils/types';
import Icon from '../Icon/Icon';
import './InfoItem.scss';

import React from 'react';

const InfoItem: React.FC<IInfoItemProps> = ({
  iconName,
  children,

  handleClick,
}) => {
  return (
    <li className="item" onClick={handleClick}>
      <Icon iconName={iconName} />
      {children}
    </li>
  );
};

export default InfoItem;
