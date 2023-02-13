import clsx from 'classnames';
import React from 'react';
import type { Icons } from './Icon';
import Icon from './Icon';

type IconButtonProps = {
  icon?: Icons;
  className?: string;
  variant?: 'circle' | 'square' | 'custom';
  color?: 'primary' | 'secondary';
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function IconButton({
  icon,
  className,
  children,
  onClick,
  variant = 'square',
  color = 'primary',
}: IconButtonProps) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center hover:scale-[1.15] transition-all',
        className,
        {
          'rounded-[11px] w-[2.5rem] h-[2.5rem] p-[12px]': variant === 'square',
          'bg-blue-ice': variant === 'square' && color === 'primary',
          'bg-white': variant === 'square' && color === 'secondary',
          'w-[42px] h-[42px] rounded-full border border-gray-trans p-[12px]':
            variant === 'circle',
        }
      )}
      onClick={onClick}
    >
      {icon ? <Icon type={icon} className="w-full h-full" /> : children}
    </div>
  );
}
