import clsx from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LogoSvg from '@/assets/icons/logo.svg';
import ExchangeSvg from '@/assets/exchange.svg';
import ExchangeLightSvg from '@/assets/exchange-light.svg';
import LogoutSvg from '@/assets/icons/logout.svg';
import LINKS from '@/utils/links';

const navbarItems = [
  {
    path: LINKS.home.path,
    icon: require('@/assets/icons/home.svg').default,
    label: 'Home',
  },
  {
    path: LINKS.trans.path,
    icon: require('@/assets/icons/time.svg').default,
    label: 'Transactions',
  },
  {
    path: '/main/settings',
    icon: require('@/assets/icons/setting.svg').default,
    label: 'Settings',
  },
  {
    path: '/main/profile',
    icon: require('@/assets/icons/user.svg').default,
    label: 'My profile',
  },
];

export default function Sidebar() {
  const pathname = usePathname() as string;

  return (
    <div className="hidden pointer-events-auto lg:flex flex-col w-[240px] overflow-y-auto pt-[36px] pb-[60px]">
      <div className="flex mb-[52px] justify-center">
        <a aria-label="Home" href="/">
          <LogoSvg className="fill-blue w-[168px]" />
        </a>
      </div>
      <nav className="mb-[22px]">
        <ul role="list">
          {navbarItems.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.path}
                className={clsx(
                  'flex items-center pl-[40px] pr-[16px] py-[20px] cursor-pointer hover:bg-gray-pale',
                  {
                    'font-manrope-bold text-blue bg-gray-pale':
                      item.path.startsWith(pathname),
                    'font-manrope-medium text-gray':
                      !item.path.startsWith(pathname),
                  }
                )}
              >
                <item.icon
                  className={clsx('mr-[.875rem]', {
                    'fill-blue': item.path.startsWith(pathname),
                    'fill-gray': !item.path.startsWith(pathname),
                  })}
                />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link
        href={LINKS.reqSend.path}
        className={clsx(
          'group hover:bg-blue hover:text-white pl-[6px] py-[4px] mx-[20px] rounded-[30px] flex items-center text-[16px] font-manrope-medium cursor-pointer',
          {
            'bg-blue text-white': pathname.startsWith(LINKS.reqSend.path),
            'bg-gray-pale text-black': !pathname.startsWith(LINKS.reqSend.path),
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
      <Link
        href="/auth/logout"
        className="mt-auto flex items-center px-[42px] py-[20px] cursor-pointer font-manrope-medium text-gray fill-gray active:fill-blue hover:font-manrope-bold active:text-blue hover:bg-gray-pale"
      >
        <LogoutSvg className="mr-[.875rem]" />
        <span>Log out</span>
      </Link>
    </div>
  );
}
