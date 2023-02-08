import React from 'react';
import cls from 'classnames';
import type { ButtonProps } from './Button';
import Button from './Button';

type ContainedButtonProps = ButtonProps & {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
};

export default function ContainedButton({
  className,
  children,
  variant = 'primary',
  ...props
}: ContainedButtonProps) {
  return (
    <Button
      {...props}
      className={cls(className, 'hover:brightness-75 text-[.875rem]', {
        'bg-purple text-white': variant === 'primary',
      })}
    >
      {children}
    </Button>
  );
}
