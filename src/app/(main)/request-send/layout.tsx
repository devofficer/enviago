'use client';

import { useState } from 'react';
import Tab from '@/components/Tab';
import TabContext from './tab-context';

export default function RequestSendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tab, setTab] = useState('Request');

  return (
    <div>
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
