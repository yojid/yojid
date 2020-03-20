import React from 'react';

import { ButtonProps, Button, ButtonVariant } from './';
import { StyledPrimaryButton } from './Styled';

export const PrimaryButton: React.FC<ButtonProps> = (props) => <Button variant={ButtonVariant.PRIMARY} {...props} />;

export default PrimaryButton;
