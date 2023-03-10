import React, { useEffect, useState } from 'react';

import { LoadingDots } from '../../Loaders/LoadingDots';
import { ButtonVariant } from './Button.Enum';
import { buttonVariants, StyledButton } from './Button.styles';

interface ButtonProps {
  children: React.ReactNode;
  variant: ButtonVariant;
  isLoading: boolean;
  disabled?: boolean;
  withGracefulDelay?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, variant, isLoading, disabled, withGracefulDelay, icon, onClick }: ButtonProps) => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const styles = buttonVariants[variant];

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
      style={{
        ...styles,
        ...(disabled ? styles.disabled : {}),
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
