import React from 'react';

type ButtonType = {
  type?: 'submit' | 'reset' | 'button' | undefined;
  text?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

const Button = ({ type, text, className, onClick, disabled }: ButtonType) => (
  <button
    type={type}
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);

Button.defaultProps = {
  type: 'button',
  text: '',
  className: '',
  onClick: () => {},
  disabled: true,
};

export default Button;
