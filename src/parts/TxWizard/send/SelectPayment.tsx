import IconButton from '@/components/IconButton';
import BackArrowSvg from '@/assets/icons/back-arrow.svg';
import { WizardComponent } from '@/components/Wizard';
import Button from '@/components/Button';
import PaymentMethod from '@/parts/PaymentMethod';
import TextField from '@/components/TextField';

export default function SelectPayment({ goBack }: WizardComponent) {
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
      <div className="flex flex-col justify-between flex-grow bg-white rounded-t-[30px] px-[27px] pt-[32px] pb-[34px]">
        <div>
          <PaymentMethod className="mb-[16px]" />
          <Button variant="outlined" className="mb-[21px]">
            Add new card
          </Button>
          <p className="text-[14px] mb-[8px]">Add a message?</p>
          <TextField
            placeholder="message"
            variant="multilined"
            className="mb-[16px]"
          />
        </div>
        <Button onClick={() => goBack({ payment: 'selected' })}>
          Continue
        </Button>
      </div>
    </div>
  );
}
