'use client';

import React, { useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'classnames';
import Link from 'next/link';

import LogoSvg from '@/assets/icons/logo.svg';
import ExchangeSvg from '@/assets/exchange.svg';
import ExchangeLightSvg from '@/assets/exchange-light.svg';
import LogoutSvg from '@/assets/icons/logout.svg';
import HomeSvg from '@/assets/icons/home.svg';
import TimeSvg from '@/assets/icons/time.svg';
import SettingSvg from '@/assets/icons/setting.svg';
import ProfileSvg from '@/assets/icons/user.svg';
import LINKS from '@/utils/constants/links';
import TxWizard from '@/parts/TxWizard/TxWizard';

const navbarItems = [
  {
    path: LINKS.home.path,
    icon: HomeSvg,
    label: LINKS.home.label,
  },
  {
    path: LINKS.trans.path,
    icon: TimeSvg,
    label: LINKS.trans.label,
  },
  {
    path: LINKS.reqSend.path,
    icon: ExchangeSvg,
    label: LINKS.reqSend.label,
  },
  {
    path: LINKS.settings.path,
    icon: SettingSvg,
    label: LINKS.settings.label,
  },
  {
    path: LINKS.profile.path,
    icon: ProfileSvg,
    label: LINKS.profile.label,
  },
];

export default function Sidebar() {
  const pathname = usePathname() as string;
  const isRequestPage = useMemo(
    () => pathname.startsWith(LINKS.reqSend.path),
    [pathname]
  );
  const [requestWizardOpen, setRequestWizardOpen] = useState(false);

  return (
    <>
      <div className="hidden lg:flex mb-[52px] justify-center">
        <a aria-label="Home" href="/">
          <LogoSvg className="fill-blue w-[168px]" />
        </a>
      </div>
      <nav className="hidden lg:block flex-grow">
        <ul role="list" className="h-full">
          {navbarItems.map(
            (item, idx) =>
              item.path !== LINKS.reqSend.path && (
                <li key={idx}>
                  <Link
                    href={item.path}
                    className={clsx(
                      'flex items-center pl-[40px] pr-[16px] py-[20px] cursor-pointer hover:bg-gray-pale',
                      {
                        'font-manrope-bold text-blue bg-gray-pale':
                          pathname === item.path,
                        'font-manrope-medium text-gray': pathname !== item.path,
                      }
                    )}
                  >
                    <item.icon
                      className={clsx('mr-[.875rem]', {
                        'fill-blue': pathname === item.path,
                        'fill-gray': pathname !== item.path,
                      })}
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              )
          )}
          <li className="mt-[22px] flex-grow">
            <Link
              href={LINKS.reqSend.path}
              className={clsx(
                'group hover:bg-blue hover:text-white pl-[6px] py-[4px] mx-[20px] rounded-[30px] flex items-center text-[16px] font-manrope-medium cursor-pointer',
                {
                  'bg-blue text-white': isRequestPage,
                  'bg-gray-pale text-black': !isRequestPage,
                }
              )}
            >
              <ExchangeSvg
                className={clsx('mr-[8px] group-hover:hidden', {
                  hidden: isRequestPage,
                })}
              />
              <ExchangeLightSvg
                className={clsx('mr-[8px] group-hover:block', {
                  block: isRequestPage,
                  hidden: !isRequestPage,
                })}
              />
              Send&nbsp;/&nbsp;Request
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center w-full justify-around lg:hidden">
        {navbarItems.map((item, idx) =>
          item.path !== LINKS.reqSend.path ? (
            <Link key={idx} href={item.path}>
              <item.icon
                className={clsx('hover:fill-blue', {
                  'fill-blue': pathname === item.path,
                  'fill-gray': pathname !== item.path,
                })}
              />
            </Link>
          ) : (
            <item.icon key={idx} onClick={() => setRequestWizardOpen(true)} />
          )
        )}
      </div>
      <Link
        href="/auth/logout"
        className="hidden mt-auto lg:flex items-center px-[42px] py-[20px] cursor-pointer font-manrope-medium text-gray fill-gray active:fill-blue hover:font-manrope-bold active:text-blue hover:bg-gray-pale"
      >
        <LogoutSvg className="mr-[.875rem]" />
        <span>Log out</span>
      </Link>
      <TxWizard
        open={requestWizardOpen}
        onClose={() => setRequestWizardOpen(false)}
      />
    </>
  );
}
