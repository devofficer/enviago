import Image from 'next/image';
import React from 'react';
import Button from './Button';
import cls from 'classnames';

type ForwardButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ForwardButton(props: ForwardButtonProps) {
  return (
    <Button
      className={cls(
        'justify-between text-white pr-[0.5rem] bg-purple',
        props.className
      )}
    >
      {props.children}
      <div className="p-[12px] w-[40px] h-[40px] rounded-[11px] bg-[#1c1e61]">
        <Image
          src="/images/icons/forward-arrow.svg"
          width={20}
          height={18}
          alt="arrow"
        />
      </div>
    </Button>
  );
}
