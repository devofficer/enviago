'use client';

import LINKS from '@/utils/constants/links';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import Profile from './Profile';
import RecentTx from './RecentTx';

export default function Rightbar() {
  const pathname = usePathname();
  const isProfile = useMemo(
    () => pathname?.startsWith(LINKS.profile.path),
    [pathname]
  );

  return isProfile ? <RecentTx /> : <Profile />;
}
