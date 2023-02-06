import clsx from 'classnames';
import Link from 'next/link';
import React from 'react';

type LinkButtonProps = {
  className?: string;
  path: string;
  children: React.ReactNode;
};

export default function LinkButton(props: LinkButtonProps) {
  return (
    <Link
      href={props.path}
      className={clsx(
        'font-manrope-semibold text-blue leading-[1rem] text-[.75rem]'
      )}
    >
      {props.children}
    </Link>
  );
}
