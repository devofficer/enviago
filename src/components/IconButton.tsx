import clsx from 'classnames';
import React from 'react';
import type { Icons } from './Icon';
import Icon from './Icon';

type IconButtonProps = {
  icon?: Icons;
  className?: string;
  variant?: 'circle' | 'square' | 'custom';
  children?: React.ReactNode;
};

export default function IconButton({
  icon,
  className,
  children,
  variant = 'square',
}: IconButtonProps) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center hover:scale-[1.15] transition-all',
        className,
        {
          'bg-blue-ice rounded-[11px] w-[2.5rem] h-[2.5rem] p-[12px]':
            variant === 'square',
          'w-[42px] h-[42px] rounded-full border border-gray-trans p-[12px]':
            variant === 'circle',
        }
      )}
    >
      {icon ? <Icon type={icon} className="w-full h-full" /> : children}
    </div>
  );
}
