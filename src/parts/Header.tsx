'use client';

import React, { Fragment, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'classnames';
import BREADCRUMBS from '@/utils/constants/breadcrumbs';
import LINKS from '@/utils/constants/links';
import LangSwitcher from './LangSwitcher';

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
  const showLang = useMemo(
    () => !mobile || [LINKS.home.path, LINKS.settings.path].includes(pathname),
    [mobile, pathname]
  );
  const showLabel = useMemo(() => {
    if (isHome) return false;
    if (mobile) {
      if (isParentPage && !pathname.startsWith(LINKS.profile.path)) {
        return true;
      }
      return false;
    }
    return true;
  }, [isHome, mobile, isParentPage, pathname]);

  const showBreadcrumbs = useMemo(
    () => (mobile ? isHome : true),
    [mobile, isHome]
  );
  const hiddenSidebar = !showLabel && !showBreadcrumbs && !isHome && !showLang;

  return hiddenSidebar ? null : (
    <div className="flex justify-between px-[25px] pt-[40px] lg:px-[40px] lg:pt-[40px]">
      <div className="mb-[11px] lg:mb-[24px]">
        {showLabel && breadcrumb && (
          <div className="font-manrope-bold text-[22px] leading-[32px] text-black">
            {breadcrumb[breadcrumb.length - 1].label}
          </div>
        )}
        {showBreadcrumbs && (
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

      {showLang && <LangSwitcher className="mb-[40px]" />}
    </div>
  );
}
