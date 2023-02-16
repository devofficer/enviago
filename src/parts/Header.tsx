'use client';

import React, { Fragment, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'classnames';
import BREADCRUMBS from '@/utils/breadcrumbs';
import LINKS from '@/utils/links';

export default function Header({ mobile }: { mobile: boolean }) {
  const pathname = usePathname() as string;
  const { breadcrumb, isHome, isParentPage } = useMemo(
    () => ({
      breadcrumb: BREADCRUMBS[pathname],
      isHome: pathname === LINKS.home.path,
      isParentPage: pathname.split('/').length <= 2,
    }),
    [pathname]
  );

  return (
    <div className="flex justify-between">
      <div className="mb-[11px] lg:mb-[24px]">
        {(isHome ? false : mobile ? isParentPage : true) && (
          <div className="font-manrope-bold text-[22px] leading-[32px] text-black">
            {breadcrumb?.[1]?.label}
          </div>
        )}
        {(mobile ? isHome : true) && (
          <nav className="w-full">
            <ol className="list-reset flex font-manrope-semibold text-[.875rem]">
              {breadcrumb?.map(({ breadcrumb: bread, label, path }, idx) => (
                <Fragment key={idx}>
                  <li>
                    <Link
                      href={path}
                      className={clsx('hover:text-blue', {
                        'text-blue': idx > 0 && idx === breadcrumb.length - 1,
                        'text-gray-steel':
                          idx === 0 || idx < breadcrumb.length - 1,
                      })}
                    >
                      {bread || label}
                    </Link>
                  </li>
                  {idx < breadcrumb.length - 1 && (
                    <li>
                      <span className="text-gray-500 mx-2">/</span>
                    </li>
                  )}
                </Fragment>
              ))}
            </ol>
          </nav>
        )}
        {isHome && (
          <span className="font-manrope-bold text-[22px] leading-[32px]">
            Elwin Sharvill
          </span>
        )}
      </div>

      {isHome ? (
        <div className="relative mb-[40px]">
          <Image
            src="/images/language-switcher.svg"
            width={30}
            height={34}
            alt="avatar"
          />
        </div>
      ) : (
        <div className="hidden lg:block relative mb-[40px]">
          <Image
            src="/images/language-switcher.svg"
            width={30}
            height={34}
            alt="avatar"
          />
        </div>
      )}
    </div>
  );
}
