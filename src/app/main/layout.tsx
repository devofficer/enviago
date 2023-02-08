'use client';

import { Fragment, useMemo } from 'react';
import Image from 'next/image';
import Sidebar from './sidebar';
import { usePathname } from 'next/navigation';
import BREADCRUMBS from '@/utils/breadcrumbs';
import Link from 'next/link';
import clsx from 'classnames';
import IconButton from '@/components/IconButton';
import PenSvg from '@/assets/icons/pen.svg';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() as string;
  const breadcrumb = useMemo(() => BREADCRUMBS[pathname] || [], [pathname]);

  return (
    <div className="lg:ml-[240px] lg:mr-[372px] bg-gray-pale h-screen">
      <header className="lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
        <Sidebar />
        <div className="lg:pointer-events-auto lg:block lg:w-[372px] lg:overflow-y-auto lg:ml-auto pt-[44px] pl-[29px] pr-[17px]">
          <div className="flex items-center justify-between mb-[8px]">
            <span className="font-manrope-bold text-white text-[22px] leading-[32px] bg-gray mb-[11px]">
              Indira Shree
            </span>
            <IconButton variant="custom">
              <PenSvg
                width={36}
                height={36}
                className="w-[36px] h-[36px] rounded-full"
              />
            </IconButton>
          </div>
          <div className="font-manrope-bold text-[18px] leading-[24px] text-white/70 bg-gray mb-[23px]">
            @indirashree
          </div>
          <Avatar
            className="mx-auto mb-[26px]"
            url="/images/avatars/female.png"
          />
          <p className="font-manrope-semibold text-gray-dark text-center mb-[22px]">
            A writer, digital marketing pioneer, and Wall Street Journal
            best-selling author who inspires and empowers people.
          </p>
          <div className="border border-gray-trans rounded-[15px] px-[16px] py-[26px] font-manrope-semibold text-gray text-[14px] mb-[10px]">
            enviago.com/<span className="text-purple">@indirashree</span>
          </div>
          <Button>Share link</Button>
        </div>
      </header>
      <div className="relative lg:p-[40px] bg-gray-pale">
        <div className="flex justify-between">
          <div className="mb-[24px]">
            {breadcrumb.length > 1 && (
              <div className="font-manrope-bold text-[22px] leading-[32px] text-black">
                {breadcrumb[breadcrumb.length - 1].label}
              </div>
            )}
            <nav className="rounded-md w-full">
              <ol className="list-reset flex font-manrope-semibold tex-[14px]">
                {breadcrumb.map(({ label, path }, idx) => (
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
                        {label}
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
          </div>
          <div className="relative mb-[40px]">
            <Image
              src="/images/language-switcher.svg"
              width={30}
              height={34}
              alt="avatar"
            />
          </div>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}
