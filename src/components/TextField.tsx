'use client';

import clsx from 'classnames';
import React, { useId, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type TextFieldProps = {
  placeholder?: string;
  className?: string;
  value?: string;
  password?: boolean;
  variant?: 'filled' | 'outlined' | 'multilined';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
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
  color = 'primary',
  size = 'medium',
  variant = 'outlined',
  className,
}: TextFieldProps) {
  const id = useId();
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState(value || '');
  const shrink = useMemo(
    () => (focused || text) && size !== 'small',
    [focused, text, size]
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  return variant === 'multilined' ? (
    <textarea
      placeholder={placeholder}
      className={twMerge(
        clsx(
          'text-black',
          'text-[.875rem]',
          'font-manrope-semibold',
          'focus:ring-purple',
          'focus:border-purple',
          'focus:outline-none',
          'w-full',
          'border border-gray-trans',
          'resize-none',
          'h-[160px]',
          {
            'bg-white': color === 'primary',
            'bg-gray-pale': color === 'secondary',
            'px-[18px] py-[24px]': size === 'medium',
            'rounded-[15px]': size === 'medium',
            'rounded-[25px]': size === 'small',
          }
        ),
        className
      )}
    />
  ) : (
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
            'text-[.875rem]',
            'z-10',
            {
              'translate-y-[18px] opacity-100': size === 'small',
              'opacity-0': (focused || text) && size === 'small',
              'translate-x-[18px]': !startAdornment,
              'translate-x-[52px]': !!startAdornment,
            },
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
      <input
        type={password ? 'password' : 'text'}
        id={id}
        value={text}
        className={clsx(
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
            'bg-white': color === 'primary',
            'bg-gray-pale': color === 'secondary',
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
