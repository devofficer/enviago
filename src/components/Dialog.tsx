import React, { useId } from 'react';
import { twMerge } from 'tailwind-merge';

type DialogProps = {
  children: React.ReactNode;
  className?: string;
  open: boolean;
  onClose?: () => void;
};

export default function Dialog({
  children,
  className,
  open,
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
      className="fixed z-backdrop bg-black/50 inset-0 transition-opacity opacity-100 flex items-center justify-center"
      onClick={handleClickOutside}
    >
      <div className={twMerge('bg-white rounded-[30px] z-dialog', className)}>
        {children}
      </div>
    </div>
  ) : null;
}
