'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'classnames';
import LANGS from '@/utils/constants/langs';
import SelectorSvg from '@/assets/icons/selector.svg';

type LangSwitcherProps = {
  className?: string;
};

export default function LangSwitcher({ className }: LangSwitcherProps) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(LANGS[0]);

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement>,
    lang: { id: string; icon: React.ReactSVGElement }
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false);
    setLang(lang);
  };

  return (
    <div
      className={twMerge('relative min-w-[30px]', className)}
      onClick={() => setOpen(true)}
    >
      <lang.icon />
      <SelectorSvg className="absolute right-0 bottom-[-5px]" />
      {open && (
        <div className="bottom-[-75px] right-0 absolute px-[17px] py-[15px] bg-white rounded-[4px] w-[146px] h-[61px]">
          <div className="flex items-center justify-between">
            {LANGS.map((item, idx) => (
              <div
                key={idx}
                className={clsx({
                  'rounded-full border-2 border-blue': item.id == lang.id,
                })}
                onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                  handleClick(e, item)
                }
              >
                <item.icon
                  className={clsx(
                    'hover:brightness-75 hover:drop-shadow-sm rounded-full'
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
