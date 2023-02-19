import Button from '@/components/Button';
import BankSvg from '@/assets/bank.svg';

export default function NoPaymentMethodPage() {
  return (
    <div className="bg-white rounded-[18px] px-[45px] pt-[29px] pb-[52px]">
      <div className="flex items-center gap-[23px] mb-[18px]">
        <div>
          <BankSvg className="w-[53px] h-[50px] fill-blue" />
        </div>
        <div>
          <div className="font-manrope-bold text-[22px] leading-[32px] mb-[9px]">
            No payment method yet
          </div>
          <p className="text-[14px] text-gray-dark leading-[18px]">
            Please link your profile to your bank account or add a credit card
            so that you can start sending and receiving payments.
          </p>
        </div>
      </div>
      <Button className="mb-[18px]">Link bank account</Button>
      <Button variant="outlined">Add credit card</Button>
    </div>
  );
}
