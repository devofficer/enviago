import BankSvg from '@/assets/bank.svg';
import Button from '@/components/Button';
import LINKS from '@/utils/constants/links';

export default function Payment() {
  return (
    <>
      <div className="grid grid-cols-1 gap-[13px] mb-[22px]">
        <div className="flex items-center bg-white rounded-[18px] px-[8px] py-[9px] gap-[12px] hover:bg-gray-light">
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
        <div className="flex items-center bg-white rounded-[18px] px-[8px] py-[9px] gap-[12px] hover:bg-gray-light">
          <div className="flex items-center justify-center bg-gray rounded-[10px] w-[87px] h-[55px]">
            <BankSvg className="w-[34px] h-auto fill-white" />
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
      <Button className="mb-[18px]" href={LINKS.settings.payment.linkBank.path}>
        Connect new bank account
      </Button>
      <Button variant="outlined" href={LINKS.settings.payment.addCard.path}>
        Add new credit card
      </Button>
    </>
  );
}
