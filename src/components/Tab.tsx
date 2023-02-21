'use client';

import clsx from 'classnames';

type TabProps = {
  tabs: Array<string> | Array<{ id: string; label: string }>;
  onSelect?: (_tabId: string) => void;
  active: string;
  className?: string;
};

export default function Tab({ tabs, active, onSelect, className }: TabProps) {
  return (
    <ul
      className={clsx(
        'flex flex-wrap gap-[5px] w-max bg-white rounded-[39px] p-[3px] lg:p-0 lg:bg-gray-pale text-[.875rem] font-manrope-bold text-center text-gray',
        className
      )}
    >
      {tabs.map((tab) => (
        <li
          key={typeof tab === 'string' ? tab : tab.id}
          className={clsx(
            'inline-block w-[100px] py-[8px] rounded-[39px] cursor-pointer',
            {
              'hover:text-gray-dark hover:bg-gray-light':
                active !== (typeof tab === 'string' ? tab : tab.id),
              'text-white bg-blue':
                active === (typeof tab === 'string' ? tab : tab.id),
            }
          )}
          onClick={() =>
            onSelect && onSelect(typeof tab === 'string' ? tab : tab.id)
          }
        >
          {typeof tab === 'string' ? tab : tab.label}
        </li>
      ))}
    </ul>
  );
}
