'use client';

import Sidebar from './sidebar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lg:ml-[240px] lg:mr-[372px] bg-gray-pale h-screen">
      <header className="lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
        <Sidebar />
        <div className="lg:pointer-events-auto lg:block lg:w-[372px] lg:overflow-y-auto lg:ml-auto"></div>
      </header>
      <div className="relative lg:p-[40px]">
        <main className="">{children}</main>
      </div>
    </div>
  );
}
