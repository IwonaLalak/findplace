import React, { ReactElement } from 'react';

export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ACTION = 'action',
}
export enum ButtonSizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface ButtonProps {
  children: ReactElement | string;
  icon?: ReactElement;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps): JSX.Element => {
  const { children, icon, variant = ButtonVariants.PRIMARY, size = ButtonSizes.MEDIUM, disabled, onClick } = props;

  const renderWithIcon = (): ReactElement => (
    <div>
      <span className="button__label">{children}</span>
      <span className="button__icon button__icon--right">{icon}</span>
    </div>
  );

  const withIconClassname = !!icon ? 'button--withIcon' : '';

  return (
    <button onClick={onClick} className={`button button--${variant} button--${size} ${withIconClassname}`} disabled={disabled}>
      <>{!!icon ? renderWithIcon() : children}</>
    </button>
  );
};

export default Button;
