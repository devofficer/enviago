import clsx from 'classnames';

export default function Wallet() {
  return (
    <div
      className={clsx(
        'bg-[url(/images/wallet-bg.svg)] bg-no-repeat bg-cover',
        'w-[321px] h-[106px]',
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
