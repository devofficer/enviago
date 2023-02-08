import Wallet from '@/components/Wallet';
import CashSvg from '@/assets/cash.svg';
import Image from 'next/image';
import TransactionCard from '@/components/TransactionCard';

export default function Home() {
  return (
    <div>
      <div className="flex flex-wrap">
        <Wallet className="mr-[16px] mb-[16px]" />
        <div className="flex flex-col w-[121px] h-[106px] items-center justify-center bg-white rounded-[18px] mr-[14px] mb-[16px]">
          <CashSvg className="mb-[9px]" />
          <span className="text-gray text-[14px]">Request</span>
        </div>
        <div className="flex flex-col w-[121px] h-[106px] items-center justify-center bg-white rounded-[18px] mr-[14px] mb-[16px]">
          <CashSvg className="mb-[9px]" />
          <span className="text-gray text-[14px]">Request</span>
        </div>
        <div className="flex flex-col w-[121px] h-[106px] items-center justify-center bg-white rounded-[18px] mr-[14px] mb-[16px]">
          <CashSvg className="mb-[9px]" />
          <span className="text-gray text-[14px]">Request</span>
        </div>
      </div>
      <h1 className="font-manrope-bold text-[18px] leading-[24px] text-black mb-[17px]">
        Recent Activity
      </h1>
      <TransactionCard className="mb-[16px]" />
      <TransactionCard className="mb-[16px]" />
      <TransactionCard className="mb-[16px]" />
      <TransactionCard className="mb-[16px]" />
      <TransactionCard className="mb-[16px]" />
      <TransactionCard className="mb-[16px]" />
      <TransactionCard className="mb-[16px]" />
    </div>
  );
}
