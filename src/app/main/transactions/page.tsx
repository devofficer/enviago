'use client';

import TransactionCard from '@/components/TransactionCard';
import useTailwindBreakpoint from '@/hooks/use-breakpoint';
import transactions from '@/mock/transactions';
import Link from 'next/link';

export default function Transactions() {
  const bp = useTailwindBreakpoint();
  console.log(bp);
  return (
    <div>
      <ul className="flex flex-wrap w-max bg-white rounded-[39px] p-[3px] text-[14px] font-manrope-bold text-center text-gray mb-[11px] lg:mb-[31px]">
        <li>
          <Link
            href="#"
            className="inline-block w-[100px] py-[8px] text-white bg-blue rounded-[39px] active"
            aria-current="page"
          >
            All
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-block w-[100px] py-[8px] rounded-[39px] hover:text-gray-dark hover:bg-gray-light"
          >
            Sent
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-block w-[100px] py-[8px] rounded-[39px] hover:text-gray-dark hover:bg-gray-light"
          >
            Requested
          </Link>
        </li>
      </ul>
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
