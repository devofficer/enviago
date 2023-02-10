'use client';

import clsx from 'classnames';
import React, { useMemo, useState } from 'react';

type TextFieldProps = {
  placeholder?: string;
  className?: string;
  value?: string;
  password?: boolean;
  variant?: 'filled' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onChange?: (_value: string) => void;
};

export default function TextField({
  value,
  password,
  placeholder,
  startAdornment,
  endAdornment,
  size = 'medium',
  variant = 'outlined',
  className,
}: TextFieldProps) {
  const id = useMemo(() => `textfield-${new Date().getTime().toString()}`, []);
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState(value || '');
  const shrink = useMemo(
    () => (focused || text) && size !== 'small',
    [focused, text, size]
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  return (
    <div
      className={clsx(className, 'w-full', 'relative', 'flex', 'text-left', {
        'justify-start': !!startAdornment,
        'justify-end': !!endAdornment,
        'h-[52px]': size === 'small',
        'h-[72px]': size === 'medium',
      })}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {(startAdornment || endAdornment) && (
        <div className="flex items-center mx-[16px] z-10 h-full">
          {startAdornment || endAdornment}
        </div>
      )}
      {placeholder && (
        <label
          htmlFor={id}
          className={clsx(
            'absolute top-0 left-0',
            'font-manrope-semibold text-[12px]',
            'transition-all',
            'origin-top-left',
            'pointer-events-none',
            'z-10',
            {
              'translate-y-[12px] text-purple': shrink && size === 'medium',
              'translate-y-[28px] text-gray-cool': !shrink && size === 'medium',
              'translate-y-[18px] text-gray-cool opacity-100': size === 'small',
              'opacity-0': (focused || text) && size === 'small',
              'translate-x-[18px]': !startAdornment,
              'translate-x-[52px]': !!startAdornment,
            }
          )}
        >
          {placeholder}
        </label>
      )}
      <input
        type={password ? 'password' : 'text'}
        id={id}
        value={text}
        className={clsx(
          'bg-white',
          'text-black',
          'text-[.875rem]',
          'font-manrope-semibold',
          'focus:ring-purple',
          'focus:border-purple',
          'focus:outline-none',
          'absolute z-0',
          'w-full',
          {
            'pt-[32px] pb-[16px]': shrink && placeholder && size === 'medium',
            'py-[24px]': !(shrink && placeholder) && size === 'medium',
            'py-[15px]': size === 'small',
            'border border-gray-trans': variant === 'outlined',
            'rounded-[15px]': size === 'medium',
            'rounded-[25px]': size === 'small',
            'pl-[18px]': !startAdornment,
            'pl-[52px]': !!startAdornment,
            'pr-[18px]': !endAdornment,
            'pr-[52px]': !!endAdornment,
          }
        )}
        style={{ textAlign: 'inherit' }}
        onChange={handleChange}
      />
    </div>
  );
}
