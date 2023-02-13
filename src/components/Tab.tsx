'use client';

import clsx from 'classnames';

type TabProps = {
  tabs: Array<string>;
  onSelect?: (_tabId: string) => void;
  active: string;
};

export default function Tab({ tabs, active, onSelect }: TabProps) {
  return (
    <ul className="flex flex-wrap w-max bg-white rounded-[39px] p-[3px] lg:p-0 lg:bg-inherit text-[.875rem] font-manrope-bold text-center text-gray mb-[11px] lg:mb-[31px]">
      {tabs.map((tab) => (
        <li
          key={tab}
          className={clsx(
            'inline-block w-[100px] py-[8px] rounded-[39px] cursor-pointer',
            {
              'hover:text-gray-dark hover:bg-gray-light': active !== tab,
              'text-white bg-blue': active === tab,
            }
          )}
          onClick={() => onSelect && onSelect(tab)}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
}