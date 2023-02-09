import React from 'react';
import cls from 'classnames';

type DividerProps = {
  className?: string;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary';
};

export default function Divider({ color = 'primary', className, children }: DividerProps) {
  return (
    <div
      className={cls(
        className,
        'border border-sold w-full h-0 flex justify-center relative',
        {
          'border-[#efefef]': color === 'primary',
          'border-[#f5f7f9]': color === 'secondary',
        }
      )}
    >
      {children ? (
        <div className="px-[1rem] text-[#969aa8] font-montserrat-semibold bg-white absolute mt-[-.75rem]">
          {children}
        </div>
      ) : null}
    </div>
  );
}
