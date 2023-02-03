import React from 'react';
import Button from './Button';
import cls from 'classnames';

type OutlinedButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
};

export default function OutlinedButton({ className, children, variant = 'primary' }: OutlinedButtonProps) {
  return (
    <Button
      className={cls(
        'bg-white text-[.875rem] border border-solid',
        className,
        {
          'border-purple text-purple': variant === 'primary',
          'border-gray-trans text-gray-cool': variant === 'secondary'
        }
      )}
    >
      {children}
    </Button>
  );
}
