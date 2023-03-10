import Sidebar from '@/parts/Sidebar';
import Header from '@/parts/Header';
import { checkMobile } from '@/utils/helpers/next';
import Rightbar from '@/parts/Rightbar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = checkMobile();
  return (
    <div className="main-content lg:ml-[240px] lg:mr-[372px] bg-gray-pale h-screen">
      <header className="lg:pointer-events-none lg:fixed lg:inset-0 lg:z-header lg:flex">
        <div className="fixed w-full h-[84px] bg-white z-sidebar bottom-0 pointer-events-auto flex lg:flex-col lg:justify-start lg:w-[240px] lg:h-full lg:overflow-y-auto lg:pt-[36px] lg:pb-[60px]">
          <Sidebar />
        </div>
        {isMobile === false && (
          <div className="hidden lg:pointer-events-auto lg:block lg:w-[372px] lg:overflow-y-auto lg:ml-auto">
            <Rightbar />
          </div>
        )}
      </header>
      <div className="relative bg-gray-pale">
        <Header mobile={isMobile} />
        <main>{children}</main>
      </div>
    </div>
  );
}
