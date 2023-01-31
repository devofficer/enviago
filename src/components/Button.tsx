import React from "react";
import cls from 'classnames';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button(props: ButtonProps) {
  return (
    <button className={cls('btn', props?.className)}>
      {props.children}
    </button>
  )
}