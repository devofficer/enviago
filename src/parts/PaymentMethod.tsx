'use client';

import { twMerge } from 'tailwind-merge';
import IconButton from '@/components/IconButton';
import Image from 'next/image';
import EditSvg from '@/assets/icons/edit.svg';
import DeleteSvg from '@/assets/icons/delete.svg';

type PaymentMethodProps = {
  className?: string;
  itemClass?: string;
  onSelect?: () => void;
};

export default function PaymentMethod({
  className,
  itemClass,
  onSelect,
}: PaymentMethodProps) {
  return (
    <div className={twMerge('grid grid-cols-1 gap-[13px]', className)}>
      <div
        className={twMerge(
          'flex items-center bg-gray-pale rounded-[18px] px-[8px] py-[9px] gap-[12px] hover:bg-gray-light',
          itemClass
        )}
        onClick={() => onSelect && onSelect()}
      >
        <div className="bg-purple rounded-[10px] w-[87px] h-[55px]"></div>
        <div>
          <div className="text-[14px] text-dark leading-[20px] mb-[8px]">
            Credit Card <span className="text-gray">(Visa)</span>
          </div>
          <div className="text-[12px] leading-[16px] text-blue">
            **** *** *** 2918
          </div>
        </div>
        <div className="flex gap-[17px] flex-grow justify-end mr-[8px]">
          <IconButton variant="custom">
            <DeleteSvg />
          </IconButton>
          <IconButton variant="custom">
            <EditSvg />
          </IconButton>
        </div>
      </div>
      <div
        className={twMerge(
          'flex items-center bg-gray-pale rounded-[18px] px-[8px] py-[9px] gap-[12px] hover:bg-gray-light',
          itemClass
        )}
        onClick={() => onSelect && onSelect()}
      >
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
        <div className="flex gap-[17px] flex-grow justify-end mr-[8px]">
          <IconButton variant="custom">
            <DeleteSvg />
          </IconButton>
          <IconButton variant="custom">
            <EditSvg />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
