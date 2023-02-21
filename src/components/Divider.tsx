import React from 'react';
import clsx from 'classnames';
import { twMerge } from 'tailwind-merge';

type DividerProps = {
  className?: string;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary';
};

export default function Divider({
  color = 'primary',
  className,
  children,
}: DividerProps) {
  return (
    <div
      className={twMerge(
        clsx('border border-sold w-full h-0 flex justify-center relative', {
          'border-[#efefef]': color === 'primary',
          'border-[#f5f7f9]': color === 'secondary',
        }),
        className
      )}
    >
      {children ? (
        <div className="px-[16px] text-[#969aa8] text-[16px] font-montserrat-semibold bg-white absolute mt-[-12px]">
          {children}
        </div>
      ) : null}
    </div>
  );
}
