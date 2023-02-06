import React from 'react';
import cls from 'classnames';

type ContainedButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
};

export default function ContainedButton({
  className,
  children,
  variant = 'primary',
}: ContainedButtonProps) {
  return (
    <button
      className={cls('btn hover:brightness-75 text-[.875rem]', className, {
        'bg-purple text-white': variant === 'primary',
      })}
    >
      {children}
    </button>
  );
}
