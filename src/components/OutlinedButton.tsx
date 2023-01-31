import Image from 'next/image';
import React from 'react';
import Button from './Button';
import cls from 'classnames';

type OutlinedButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function OutlinedButton(props: OutlinedButtonProps) {
  return (
    <Button
      className={cls(
        'text-gray-cool bg-white font-manrope-semibold text-[.875rem] border border-solid border-gray-trans',
        props.className
      )}
    >
      {props.children}
    </Button>
  );
}
