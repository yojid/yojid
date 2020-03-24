import styled, { css } from 'styled-components';
import { ButtonProps, ButtonVariant } from './';

export const StyledButton = styled.button<ButtonProps>`
  font-size: 0.85rem;
  padding: 0.5rem 1rem;
  border-radius: ${props => props.theme.radii.default};
  border-color: transparent;
  transition: background-color 0.1s ease;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.25rem;
  }

  /* variant styles */
  ${props => props.variant === ButtonVariant.PRIMARY && StyledPrimaryButton}
  ${props => props.variant === ButtonVariant.SECONDARY && StyledSecondaryButton}
`;


export const StyledPrimaryButton = css`
  background-color: ${props => props.theme.colors.primary.main};
  color: ${props => props.theme.colors.greys.white};;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.primary.dark};
  }

  &:active {
    background-color: ${props => props.theme.colors.primary.main};
  }
`;

export const StyledSecondaryButton = css`
  background-color: white;
  color: #1b1c20;
  box-shadow: 0 1.5px 1px 0 rgba(27, 28, 32, 0.35);

  &:hover,
  &:focus {
    background-color: #e4e9f2;
  }

  &:active {
    background-color: #d4d5d8;
  }
`;
