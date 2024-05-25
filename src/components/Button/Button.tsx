import { IButtonProps } from '../../utils/types';
import './Button.scss';

import React from 'react';

const Button: React.FC<IButtonProps> = ({
  isDark = false,
  children,
  handleClick,
}) => {
  return (
    <button
      type="button"
      className={`button ${isDark ? 'button_dark' : ''}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
