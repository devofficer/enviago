import React from 'react';
import cls from 'classnames';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={cls('btn hover:brightness-75 text-[.875rem]', className)}
    >
      {children}
    </button>
  );
}
