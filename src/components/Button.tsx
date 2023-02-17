import React, { useMemo } from 'react';
import clsx from 'classnames';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large' | `${string}px`;
  color?: 'primary' | 'secondary';
  variant?: 'contained' | 'outlined' | 'naked';
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  className,
  children,
  href,
  onClick,
  disabled = false,
  color = 'primary',
  variant = 'contained',
  size = 'medium',
}: ButtonProps) {
  const classes = useMemo(
    () =>
      twMerge(
        clsx(
          'flex items-center justify-center',
          'text-center text-[14px] font-manrope-extrabold',
          'rounded-[18px]',
          'hover:brightness-75',
          disabled
            ? {
                'bg-gray/30 text-gray/50': variant === 'contained',
                'bg-white text-gray/50': variant === 'outlined',
              }
            : variant === 'contained'
            ? {
                'text-purple': color === 'primary',
                'bg-purple text-white': color === 'primary',
              }
            : variant === 'outlined'
            ? {
                'bg-white border border-solid': true,
                'text-purple': color === 'primary',
                'tex-gray-cool': color === 'secondary',
                'border-purple': color === 'primary',
                'border-gray-trans': color === 'secondary',
              }
            : {
                'text-purple': color === 'primary',
              },
          {
            'min-h-[42px] px-[24px]': size === 'small',
            'min-h-[60px] px-[1.75rem] w-full': size === 'medium',
          }
        ),
        className
      ),
    [size, color, variant, className]
  );

  return href ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
