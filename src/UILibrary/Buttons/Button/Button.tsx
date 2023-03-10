import React, { useEffect, useState } from 'react';

import { LoadingDots } from '../../Loaders/LoadingDots';
import { ButtonVariant } from './Button.Enum';
import { StyledButton, useStyles } from './Button.styles';

interface ButtonProps {
  children: React.ReactNode;
  variant: ButtonVariant;
  isLoading: boolean;
  disabled?: boolean;
  withGracefulDelay?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, variant = ButtonVariant.PRIMARY, isLoading, disabled, withGracefulDelay, icon, onClick }: ButtonProps) => {
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
    <StyledButton
      disabled={disabled || isLoading}
      onClick={onClick}
      className={variant === ButtonVariant.PRIMARY ? classes.primary : classes.secondary}
      style={{
        ...(disabled ? classes.disabled : {}),
      }}
    >
      {isButtonLoading ? (
        <LoadingDots />
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </StyledButton>
  );
};
export default Button;
