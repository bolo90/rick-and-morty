import React from 'react';
import { StyledButton } from './Button.styled';

interface Props {
  label: string;
  onClick: any;
}

const Button = (props: Props) => {
  const { label, onClick } = props;
  return (
    <StyledButton onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
