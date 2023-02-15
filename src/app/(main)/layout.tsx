import ClientLayout from './ClientLayout';
import { checkMobile } from '@/utils/next-helpers';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = checkMobile();

  return <ClientLayout isMobile={isMobile}>{children}</ClientLayout>;
}
