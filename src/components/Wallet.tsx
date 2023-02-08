import clsx from 'classnames';

type WalletProps = {
  className?: string;
};

export default function Wallet({ className }: WalletProps) {
  return (
    <div
      className={clsx(
        className,
        'bg-[url(/images/wallet-bg.svg)] bg-no-repeat bg-contain',
        'min-w-[321px] min-h-[106px]',
        'px-[23px] py-[21px]'
      )}
    >
      <div className={clsx('float-left')}>
        <p className="text-white opacity-[65%] font-manrope-semibold text-[12px] mb-[8px]">
          My Wallet
        </p>
        <p className="text-white font-manrope-bold text-[26px]">$420,03</p>
      </div>
      <div
        className={clsx(
          'float-right',
          'rounded-[15px]',
          'bg-white bg-opacity-[35%]',
          'px-[13.5px] py-[6px]',
          'text-[12px] text-white'
        )}
      >
        In Enviago
      </div>
    </div>
  );
}
