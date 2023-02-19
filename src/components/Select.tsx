'use client';

import clsx from 'classnames';
import React, { useId, useMemo } from 'react';

type SelectProps = {
  items?: Array<string>;
  placeholder?: string;
  className?: string;
  value?: string;
  variant?: 'filled' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
  onChange?: (_value: string) => void;
};

export default function Select({
  value,
  items,
  placeholder,
  color = 'primary',
  size = 'medium',
  variant = 'outlined',
  onChange,
  className,
}: SelectProps) {
  const id = useId();
  const shrink = useMemo(() => placeholder && value, [value, placeholder]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div
      className={clsx(className, 'w-full', 'relative', 'flex', 'text-left', {
        'h-[72px]': size === 'medium',
      })}
    >
      {placeholder && (
        <label
          htmlFor={id}
          className={clsx(
            'absolute top-0 left-[18px]',
            'font-manrope-semibold text-[12px]',
            'transition-all',
            'origin-top-left',
            'pointer-events-none',
            'text-[.875rem]',
            'z-10',
            shrink
              ? {
                  'translate-y-[12px] text-purple': size === 'medium',
                }
              : {
                  'translate-y-[26px]': size === 'medium',
                  'text-black/30': color === 'primary',
                  'text-gray-steel': color === 'secondary',
                }
          )}
        >
          {placeholder}
        </label>
      )}
      <select
        id={id}
        onChange={handleChange}
        className={clsx(
          'text-black',
          'text-[.875rem]',
          'font-manrope-semibold',
          'focus:ring-purple',
          'focus:border-purple',
          'focus:outline-none',
          'absolute z-0',
          'px-[14px]',
          'w-full text-opacity-0',
          {
            'pt-[32px] pb-[16px]': shrink && size === 'medium',
            'py-[24px]': size === 'medium',
            'border border-gray-trans': variant === 'outlined',
            'bg-white': color === 'primary',
            'rounded-[15px]': size === 'medium',
            'text-opacity-100': !!value,
          }
        )}
        style={{ textAlign: 'inherit' }}
        value={value}
      >
        <option value=""></option>
        {items &&
          items.map((item, idx) => (
            <option key={idx} className="text-black" value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
}
