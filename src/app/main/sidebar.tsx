import clsx from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LogoSvg from '@/assets/icons/logo.svg';
import ExchangeSvg from '@/assets/exchange.svg';
import ExchangeLightSvg from '@/assets/exchange-light.svg';
import LogoutSvg from '@/assets/icons/logout.svg';
import HomeSvg from '@/assets/icons/home.svg';
import TimeSvg from '@/assets/icons/time.svg';
import SettingSvg from '@/assets/icons/setting.svg';
import ProfileSvg from '@/assets/icons/user.svg';
import LINKS from '@/utils/links';

const navbarItems = [
  {
    path: LINKS.home.path,
    icon: HomeSvg,
    label: 'Home',
  },
  {
    path: LINKS.trans.path,
    icon: TimeSvg,
    label: 'Transactions',
  },
  {
    path: LINKS.reqSend.path,
    icon: ExchangeSvg,
    lightIcon: ExchangeLightSvg,
    label: 'Transactions',
  },
  {
    path: '/main/settings',
    icon: SettingSvg,
    label: 'Settings',
  },
  {
    path: '/main/profile',
    icon: ProfileSvg,
    label: 'My profile',
  },
];

export default function Sidebar() {
  const pathname = usePathname() as string;

  return (
    <div className="fixed w-full h-[84px] bg-white z-sidebar bottom-0 pointer-events-auto flex lg:flex-col lg:justify-start lg:w-[240px] lg:h-full lg:overflow-y-auto lg:pt-[36px] lg:pb-[60px]">
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
                          pathname.startsWith(item.path),
                        'font-manrope-medium text-gray': !pathname.startsWith(
                          item.path
                        ),
                      }
                    )}
                  >
                    <item.icon
                      className={clsx('mr-[.875rem]', {
                        'fill-blue': pathname.startsWith(item.path),
                        'fill-gray': !pathname.startsWith(item.path),
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
                  'bg-blue text-white': pathname.startsWith(LINKS.reqSend.path),
                  'bg-gray-pale text-black': !pathname.startsWith(
                    LINKS.reqSend.path
                  ),
                }
              )}
            >
              <ExchangeSvg
                className={clsx('mr-[8px] group-hover:hidden', {
                  hidden: pathname.startsWith(LINKS.reqSend.path),
                })}
              />
              <ExchangeLightSvg
                className={clsx('mr-[8px] group-hover:block', {
                  block: pathname.startsWith(LINKS.reqSend.path),
                  hidden: !pathname.startsWith(LINKS.reqSend.path),
                })}
              />
              Send&nbsp;/&nbsp;Request
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center w-full justify-around lg:hidden">
        {navbarItems.map((item, idx) => (
          <Link key={idx} href={item.path}>
            <item.icon
              className={clsx('hover:fill-blue', {
                'fill-blue': pathname.startsWith(item.path),
                'fill-gray': !pathname.startsWith(item.path),
              })}
            />
          </Link>
        ))}
      </div>
      <Link
        href="/auth/logout"
        className="hidden mt-auto lg:flex items-center px-[42px] py-[20px] cursor-pointer font-manrope-medium text-gray fill-gray active:fill-blue hover:font-manrope-bold active:text-blue hover:bg-gray-pale"
      >
        <LogoutSvg className="mr-[.875rem]" />
        <span>Log out</span>
      </Link>
    </div>
  );
}
