import React from 'react';
import clsx from 'classnames';

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large' | `${string}px`;
};

export default function Button({
  className,
  children,
  size = 'medium',
}: ButtonProps) {
  return (
    <button
      className={clsx(
        className,
        'flex items-center justify-center',
        'text-center text-[0.875rem] font-manrope-extrabold',
        'rounded-[18px]',
        'hover:brightness-75',
        {
          'min-h-[42px] px-[24px]': size === 'small',
          'min-h-[60px] px-[1.75rem] w-full': size === 'medium',
        }
      )}
    >
      {children}
    </button>
  );
}
