'use client';

import { Fragment, useMemo } from 'react';
import Image from 'next/image';
import Sidebar from './sidebar';
import { usePathname } from 'next/navigation';
import BREADCRUMBS from '@/utils/breadcrumbs';
import Link from 'next/link';
import clsx from 'classnames';

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
        <div className="lg:pointer-events-auto lg:block lg:w-[372px] lg:overflow-y-auto lg:ml-auto pt-[44px] pl-[29px] ">

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
