import React from 'react';

import { Button, ButtonProps, ButtonVariant } from './';

export const SecondaryButton: React.FC<ButtonProps> = props => <Button variant={ButtonVariant.SECONDARY} {...props} />;

export default SecondaryButton;
