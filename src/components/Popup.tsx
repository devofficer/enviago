import React, { useId } from 'react';
import { twMerge } from 'tailwind-merge';

type PopupProps = {
  children: React.ReactNode;
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
      className="fixed z-backdrop bg-black/50 inset-0 transition-opacity opacity-100 flex items-center justify-center"
      onClick={handleClickOutside}
    >
      <div
        className={twMerge(
          'bg-white rounded-t-[30px] z-dialog mt-[20vh] w-full h-[80vh] px-[25px] py-[41px] overflow-y-auto',
          className
        )}
      >
        {children}
      </div>
    </div>
  ) : null;
}
