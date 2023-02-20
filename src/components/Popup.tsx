import React, { useId } from 'react';
import { twMerge } from 'tailwind-merge';

export type PopupProps = {
  children?: React.ReactNode;
  className?: string;
  open: boolean;
  onClose?: () => void;
};

export default function Popup({
  children,
  className,
  open,
  onClose,
}: PopupProps) {
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
      className="main-content:overflow-hidden fixed z-backdrop bg-black/50 inset-0 transition-opacity opacity-100 flex items-center justify-center"
      onClick={handleClickOutside}
    >
      <div className={twMerge('z-dialog w-full overflow-y-auto', className)}>
        {children}
      </div>
    </div>
  ) : null;
}
