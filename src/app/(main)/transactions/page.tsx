'use client';

import Tab from '@/components/Tab';
import TransactionCard from '@/components/TransactionCard';
import transactions from '@/mock/transactions';
import { useState } from 'react';

export default function Transactions() {
  const [tab, setTab] = useState('All');

  return (
    <div>
      <Tab
        active={tab}
        onSelect={(t) => setTab(t)}
        tabs={['All', 'Sent', 'Requested']}
        className="mb-[11px] lg:mb-[31px]"
      />
      {transactions.map((trans, idx) => (
        <TransactionCard
          key={idx}
          className="mb-[9px] lg:mb-[16px]"
          data={trans}
        />
      ))}
    </div>
  );
}
