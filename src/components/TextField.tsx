'use client';

import clsx from 'classnames';
import { useMemo, useState } from 'react';

type TextFieldProps = {
  placeholder?: string;
  className?: string;
  value?: string;
  password?: boolean;
  onChange?: (value: string) => void;
};

export default function TextField(props: TextFieldProps) {
  const id = useMemo(() => `textfield-${new Date().getTime().toString()}`, []);
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState(props.value || '');
  const shrink = useMemo(() => focused || text, [focused, text]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  return (
    <div
      className={clsx('w-full', 'relative', 'flex flex-col', props.className)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <label
        htmlFor={id}
        className={clsx(
          'absolute top-0 left-0',
          'font-manrope-semibold text-[12px]',
          'transition-all',
          'origin-top-left translate-x-[18px]',
          'pointer-events-none',
          shrink
            ? 'translate-y-[12px] text-purple'
            : 'translate-y-[28px] text-gray-cool'
        )}
      >
        {props.placeholder}
      </label>
      <input
        type={props.password ? "password" : "text"}
        id={id}
        value={text}
        className={clsx(
          'textfield',
          shrink ? 'pt-[32px] pb-[16px]' : 'py-[24px]'
        )}
        onChange={handleChange}
      />
    </div>
  );
}
