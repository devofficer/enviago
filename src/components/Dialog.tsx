import React from 'react';
import { twMerge } from 'tailwind-merge';

type DialogProps = {
  children: React.ReactNode;
  className?: string;
  open: boolean;
};

export default function Dialog({ children, className, open }: DialogProps) {
  return open ? (
    <div className="fixed z-backdrop bg-black/50 inset-0 transition-opacity opacity-100 flex items-center justify-center">
      <div className={twMerge('bg-white rounded-[30px] z-dialog', className)}>
        {children}
      </div>
    </div>
  ) : null;
}
