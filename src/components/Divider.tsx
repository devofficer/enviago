import React from 'react';
import cls from 'classnames';

type DividerProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Divider(props: DividerProps) {
  return (
    <div
      className={cls(
        'border border-sold border-[#efefef] w-full h-0 flex justify-center relative',
        props.className
      )}
    >
      {props.children ? (
        <div className="px-[1rem] text-[#969aa8] font-montserrat-semibold bg-white absolute mt-[-.75rem]">
          {props.children}
        </div>
      ) : null}
    </div>
  );
}
