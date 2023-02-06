import clsx from 'classnames';
import React, { useMemo } from 'react';

type CheckboxProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Checkbox(props: CheckboxProps) {
  const id = useMemo(() => `checkbox-${new Date().getTime().toString()}`, []);

  return (
    <div className={clsx('flex', props.className)}>
      <input
        id={id}
        type="checkbox"
        className="form-checkbox w-[25px] h-[25px] rounded-[8px] mr-[13px]"
        defaultChecked
      />
      <label htmlFor={id} className="leading-none">
        {props.children}
      </label>
    </div>
  );
}
