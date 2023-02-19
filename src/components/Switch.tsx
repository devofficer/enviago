'use client';

import { twMerge } from 'tailwind-merge';
import clsx from 'classnames';

type SwitchProps = {
  className?: string;
  active: boolean;
  onChange: (_active: boolean) => void;
};

export default function Switch({ className, active, onChange }: SwitchProps) {
  const handleClick = () => {
    onChange(!active);
  };

  return (
    <div
      className={twMerge(
        clsx({
          'bg-blue': active,
          'bg-gray': !active,
          'justify-start': !active,
          'justify-end': active,
        }),
        className,
        'w-[32px] h-[18px] relative',
        'p-[3px] rounded-full transition-transform'
      )}
      onClick={handleClick}
    >
      <div
        className={clsx(
          'w-[12px] h-[12px] bg-white rounded-full transition-transform',
          'absolute top-[3px]',
          {
            'translate-x-[0px]': !active,
            'translate-x-[14px]': active,
          }
        )}
      ></div>
    </div>
  );
}
