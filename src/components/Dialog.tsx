import React, { useId } from 'react';
import { twMerge } from 'tailwind-merge';
import CrossSvg from '@/assets/icons/cross.svg';
import IconButton from './IconButton';

type DialogProps = {
  children: React.ReactNode;
  className?: string;
  open: boolean;
  closeBtn?: boolean;
  onClose?: () => void;
};

export default function Dialog({
  children,
  className,
  open,
  closeBtn = true,
  onClose,
}: DialogProps) {
  const id = useId();

  const handleClickOutside = (
    e: React.MouseEvent<HTMLDivElement> & { target: HTMLDivElement }
  ) => {
    if (e.target.id === id && onClose) {
      onClose();
    }
  };

  return open ? (
    <div
      id={id}
      className="main-content:overflow-hidden overflow-auto py-[34px] flex-wrap fixed z-backdrop bg-black/50 inset-0 transition-opacity opacity-100 flex items-center justify-center"
      onClick={handleClickOutside}
    >
      <div
        className={twMerge(
          'bg-white rounded-[30px] z-dialog relative',
          className
        )}
      >
        {closeBtn && (
          <IconButton
            variant="custom"
            onClick={onClose}
            className="absolute top-[22px] right-[32px]"
          >
            <CrossSvg />
          </IconButton>
        )}
        {children}
      </div>
    </div>
  ) : null;
}
