'use client';

import { useState } from 'react';
import Tab from '@/components/Tab';
import TabContext from '@/contexts/TabContext';

export default function RequestSendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tab, setTab] = useState('Request');

  return (
    <div className="px-[25px] pb-[104px] lg:px-[40px] lg:pb-[40px]">
      <Tab
        active={tab}
        tabs={['Request', 'Send']}
        onSelect={(id) => setTab(id)}
        className="mb-[28px]"
      />
      <TabContext.Provider value={{ tab, setTab }}>
        {children}
      </TabContext.Provider>
    </div>
  );
}
