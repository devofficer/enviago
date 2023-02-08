import Image from 'next/image';
import ContainedButton from './ContainedButton';
import clsx from 'classnames';

type TransactionCardProps = {
  className?: string;
};

export default function TransactionCard({ className }: TransactionCardProps) {
  return (
    <div
      className={clsx(
        className,
        'rounded-[18px] bg-white hover:bg-gray group h-[77px] flex items-center justify-between px-[16px]'
      )}
    >
      <div className="flex">
        <Image
          src="/images/avatars/female.png"
          width={100}
          height={100}
          alt="female"
          className="w-[39px] h-[39px] mr-[14px]"
        />
        <div className="flex flex-col font-manrope-semibold">
          <div className="group-hover:hidden text-dark text-[14px] leading-[20px] mb-[4px]">
            Gibby Radki
          </div>
          <div className="hidden group-hover:block text-white text-[14px] leading-[20px] mb-[4px]">
            Gibby Radki requested $250.
          </div>
          <div className="text-gray group-hover:text-white text-[12px] leading-[16px]">
            3 hours ago
          </div>
        </div>
      </div>
      <div className="group-hover:hidden text-green font-manrope-bold tracking-[1px]">
        +$250
      </div>
      <ContainedButton size="small" className="hidden group-hover:block">
        Details
      </ContainedButton>
    </div>
  );
}
