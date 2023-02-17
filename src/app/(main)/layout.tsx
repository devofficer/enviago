import Sidebar from '@/parts/Sidebar';
import Profile from '@/parts/Profile';
import Header from '@/parts/Header';
import { checkMobile } from '@/utils/helpers/next';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="main-content lg:ml-[240px] lg:mr-[372px] bg-gray-pale h-screen">
      <header className="lg:pointer-events-none lg:fixed lg:inset-0 lg:z-header lg:flex">
        <div className="fixed w-full h-[84px] bg-white z-sidebar bottom-0 pointer-events-auto flex lg:flex-col lg:justify-start lg:w-[240px] lg:h-full lg:overflow-y-auto lg:pt-[36px] lg:pb-[60px]">
          <Sidebar />
        </div>
        <div className="hidden lg:pointer-events-auto lg:block lg:w-[372px] lg:overflow-y-auto lg:ml-auto pt-[44px] pl-[29px] pr-[17px]">
          <Profile />
        </div>
      </header>
      <div className="relative px-[25px] pt-[40px] pb-[104px] lg:p-[40px] bg-gray-pale">
        <Header mobile={checkMobile()} />
        <main>{children}</main>
      </div>
    </div>
  );
}
