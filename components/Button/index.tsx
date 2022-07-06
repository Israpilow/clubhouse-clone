import clsx from 'clsx';
import React, { FC } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  children?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color?: 'green' | 'gray';
  className?: string;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  color,
  className,
  disabled,
}) => {
  const colors = {
    green: styles.buttonGreen,
    gray: styles.buttonGray,
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(className, styles.button, colors[color])}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
