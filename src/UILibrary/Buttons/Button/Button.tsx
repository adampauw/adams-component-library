import React, { useEffect, useState } from 'react';

import { VF_BLACK, VF_WHITE } from '../../../constants/Colours.constants';
import { LoadingDots } from '../../Loaders/LoadingDots';
import { ButtonVariant } from './Button.Enum';
import { useStyles } from './Button.styles';

interface ButtonProps {
  children: React.ReactNode;
  variant: ButtonVariant;
  isLoading: boolean;
  disabled?: boolean;
  withGracefulDelay?: boolean;
  icon?: JSX.Element;
  onClick?: () => void;
}

const Button = ({ children, variant, isLoading, disabled, withGracefulDelay, icon, onClick }: ButtonProps) => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const { classes } = useStyles()();

  useEffect(() => {
    setIsButtonLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (!withGracefulDelay || !isLoading) {
      setIsButtonLoading(isLoading || false);
    } else {
      setTimeout(() => {
        setIsButtonLoading(false);
      }, ((Math.random() * 10000) % 2000) + 2000);
    }
  }, [isLoading, withGracefulDelay]);

  return (
    <button
      className={`${classes.button} ${classes[variant]} ${disabled ? classes.disabled : ''}`}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isButtonLoading ? (
        <LoadingDots color={variant === 'secondary' ? VF_BLACK : VF_WHITE} />
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </button>
  );
};
export default Button;
