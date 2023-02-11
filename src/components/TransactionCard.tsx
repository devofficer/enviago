import Image from 'next/image';
import clsx from 'classnames';
import Button from './Button';
import LINKS from '@/utils/links';

type TransactionCardProps = {
  className?: string;
  data: Transaction;
};

export default function TransactionCard({
  className,
  data,
}: TransactionCardProps) {
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
            {data.username}
          </div>
          <div className="hidden group-hover:block text-white text-[14px] leading-[20px] mb-[4px]">
            {`${data.username} ${
              data.type === 'request' ? 'Requested' : 'Sent'
            } ${data.amount}`}
          </div>
          <div className="text-gray group-hover:text-white text-[12px] leading-[16px]">
            {`${data.timestamp} ago`}
          </div>
        </div>
      </div>
      <div className="group-hover:hidden font-manrope-bold tracking-[1px]">
        {data.status === 'done' ? null : (
          <div className="text-orange bg-orange bg-opacity-[26%] rounded-[15px] leading-[20px] px-[8px] py-[4px] mb-[5px]">
            {data.status}
          </div>
        )}
        <span
          className={clsx('float-right', {
            'text-green': data.type === 'send' && data.status === 'done',
            'text-red': data.type === 'request' && data.status === 'done',
            'text-blue': data.status === 'awaiting',
          })}
        >{`${data.type === 'request' ? '-' : '+'}${data.amount}`}</span>
      </div>
      <Button
        variant="contained"
        size="small"
        className="hidden lg:group-hover:flex"
        href={LINKS.transDetails.path}
      >
        Details
      </Button>
    </div>
  );
}
