import IconButton from '@/components/IconButton';
import BackArrowSvg from '@/assets/icons/back-arrow.svg';
import { WizardComponent } from '@/components/Wizard';
import Button from '@/components/Button';
import BankBlueSvg from '@/assets/bank-blue.svg';

export default function NoPayment({ goBack, goForward }: WizardComponent) {
  return (
    <div className="bg-blue h-screen flex flex-col overflow-auto">
      <div className="pl-[28px] mb-[30px]">
        <div className="flex items-center pt-[16px] pb-[6px]">
          <IconButton
            variant="custom"
            className="mr-[10px]"
            onClick={() => goBack()}
          >
            <BackArrowSvg />
          </IconButton>
          <span className="text-[18px] text-white leading-[24px] font-manrope-bold">
            Select payment method
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between flex-grow bg-white rounded-t-[30px] px-[27px] pt-[41px] pb-[34px]">
        <div className="text-center">
          <BankBlueSvg className="mx-auto mb-[28px]" />
          <p className="text-[22px] leading-[32px] font-manrope-bold mb-[9px]">
            No payment method yet
          </p>
          <p className="text-[14px] text-gray-dark leading-[18px] mb-[28px]">
            Please link your profile to your bank account or add a credit card
            so that you can start sending and receiving payments.
          </p>
          <Button className="mb-[21px]">Link bank account</Button>
          <Button variant="outlined" className="mb-[18px]">
            Add credit card
          </Button>
        </div>
        <Button onClick={() => goForward()}>Continue</Button>
      </div>
    </div>
  );
}
