import Tab from '@/components/Tab';
import TransactionCard from '@/parts/TransactionCard';
import TX from '@/mock/transactions';
import { useState } from 'react';
import Button from '@/components/Button';
import LINKS from '@/utils/constants/links';

export default function RecentTx() {
  const [tab, setTab] = useState('All');

  return (
    <div className="px-[22px] py-[39px]">
      <Tab
        active={tab}
        onSelect={(t) => setTab(t)}
        tabs={['All', 'Sent', 'Requested']}
        className="mb-[11px] lg:mb-[31px]"
      />
      <div className="grid grid-cols-1 gap-[9px] mb-[17px]">
        {TX.slice(0, 4).map((trans, idx) => (
          <TransactionCard key={idx} data={trans} className="bg-gray-pale" />
        ))}
      </div>
      <Button href={LINKS.trans.path}>Go to transactions</Button>
    </div>
  );
}
