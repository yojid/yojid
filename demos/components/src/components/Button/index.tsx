import React from 'react';
import { StyledButton } from './Styled';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  label: string;
  addStyles?: Object;
  variant?: ButtonVariant;
}

export enum ButtonVariant {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { icon, label, addStyles } = props;

  console.log('props: ', props);
  return (
    <StyledButton {...props}>
      {icon && <span className="icon">{icon}</span>}
      <span className="label">{label}</span>
    </StyledButton>
  );
};

export default Button;
