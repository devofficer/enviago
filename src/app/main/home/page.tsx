import Wallet from '@/components/Wallet';
import RequestSvg from '@/assets/request.svg';
import ShareSvg from '@/assets/share.svg';
import SendSvg from '@/assets/send.svg';
import TransactionCard from '@/components/TransactionCard';
import transactions from '@/mock/transactions';

export default function Home() {
  return (
    <div>
      <div className="flex flex-wrap">
        <Wallet className="lg:mr-[16px] mb-[16px] w-full lg:w-max" />
        <div className="flex flex-col w-[121px] h-[106px] items-center justify-center bg-white rounded-[18px] mr-[14px] mb-[16px]">
          <RequestSvg className="mb-[9px]" />
          <span className="text-gray text-[.875rem]">Request</span>
        </div>
        <div className="flex flex-col w-[121px] h-[106px] items-center justify-center bg-white rounded-[18px] mr-[14px] mb-[16px]">
          <ShareSvg className="mb-[9px]" />
          <span className="text-gray text-[.875rem]">Share URL</span>
        </div>
        <div className="flex flex-col w-[121px] h-[106px] items-center justify-center bg-white rounded-[18px] mb-[16px]">
          <SendSvg className="mb-[9px]" />
          <span className="text-gray text-[.875rem]">Send</span>
        </div>
      </div>
      <h1 className="font-manrope-bold text-[18px] leading-[24px] text-black mb-[17px]">
        Recent Activity
      </h1>
      {transactions.map((trans, idx) => (
        <TransactionCard key={idx} data={trans} className="mb-[16px]" />
      ))}
    </div>
  );
}
