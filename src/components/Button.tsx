import React, { useMemo } from 'react';
import clsx from 'classnames';
import Link from 'next/link';

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large' | `${string}px`;
  color?: 'primary' | 'secondary';
  variant?: 'contained' | 'outlined';
  href?: string;
};

export default function Button({
  className,
  children,
  href,
  color = 'primary',
  variant = 'contained',
  size = 'medium',
}: ButtonProps) {
  const classes = useMemo(
    () =>
      clsx(
        className,
        'flex items-center justify-center',
        'text-center text-[0.875rem] font-manrope-extrabold',
        'rounded-[18px]',
        'hover:brightness-75',
        {
          'min-h-[42px] px-[24px]': size === 'small',
          'min-h-[60px] px-[1.75rem] w-full': size === 'medium',
          'bg-purple text-white':
            color === 'primary' && variant === 'contained',
          'bg-white': variant === 'outlined',
          'text-purple border-purple':
            color === 'primary' && variant === 'outlined',
          'border-gray-trans text-gray-cool':
            color === 'secondary' && variant === 'outlined',
          'border border-solid': variant === 'outlined',
        }
      ),
    [size, color, variant, className]
  );

  return href ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <button className={classes}>{children}</button>
  );
}
