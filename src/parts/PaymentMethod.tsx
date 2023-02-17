import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type PaymentMethodProps = {
  className?: string;
};

export default function PaymentMethod({ className }: PaymentMethodProps) {
  return (
    <div className={twMerge('grid grid-cols-1 gap-[13px]', className)}>
      <div className="flex items-center bg-gray-pale rounded-[18px] px-[8px] py-[9px] gap-[12px] border border-blue hover:bg-gray-light">
        <div className="bg-purple rounded-[10px] w-[87px] h-[55px]"></div>
        <div>
          <div className="text-[14px] text-dark leading-[20px] mb-[8px]">
            Credit Card <span className="text-gray">(Visa)</span>
          </div>
          <div className="text-[12px] leading-[16px] text-blue">
            **** *** *** 2918
          </div>
        </div>
      </div>
      <div className="flex items-center bg-gray-pale rounded-[18px] px-[8px] py-[9px] gap-[12px] hover:bg-gray-light">
        <div className="flex items-center justify-center bg-gray rounded-[10px] w-[87px] h-[55px]">
          <Image src="/images/bank.svg" width={34} height={32} alt="bank" />
        </div>
        <div>
          <div className="text-[14px] text-dark leading-[20px] mb-[8px]">
            Bank account
          </div>
          <div className="text-[12px] leading-[16px] text-blue">
            Ilya Vasin <span className="text-gray">- 623852453</span>
          </div>
        </div>
      </div>
    </div>
  );
}
