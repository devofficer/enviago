import Divider from '@/components/Divider';
import Image from 'next/image';
import ConfirmSvg from '@/assets/confirm.svg';
import Button from '@/components/Button';
import { WizardComponent } from '@/components/Wizard';

export default function SendDone({ data, goForward }: WizardComponent) {
  return (
    <div className="bg-gray-pale h-full px-[25px] py-[34px] overflow-auto">
      <ConfirmSvg className="mx-auto mb-[21px]" />
      <p className="font-manrope-bold text-[22px] text-center leading-[32px] text-black mb-[26px]">
        You’ve successfully transferred money.
      </p>
      <div className="px-[34px] pt-[31px] pb-[24px] bg-white rounded-[15px] mb-[44px]">
        <div className="flex flex-col items-center justify-center pt-[18px] pb-[16px] bg-gray bg-opacity-[6%] rounded-[15px] mb-[16px]">
          <span className="text-blue font-manrope-bold text-[24px] leading-[32px] mb-4">
            $2,600
          </span>
          <span className="text-gray text-[12px] leading-[16px]">
            Chilean peso
          </span>
        </div>
        <div className="text-gray-steel text-[.875rem] leading-[18px] mb-[12px]">
          Send to
        </div>
        <div className="flex items-center mb-[12px]">
          <Image
            src="/images/avatars/female.png"
            width={101}
            height={100}
            alt="avatar"
            className="rounded-full w-[48px] h-[48px] mr-[15px]"
          />
          <span className="text-[.875rem] text-dark leading-[20px]">
            Quinten Kortum
          </span>
        </div>
        <Divider color="secondary" className="mb-[16px]" />
        <div className="flex items-center justify-between text-[13px] leading-[18px]">
          <span className="text-black">Message</span>
          <span className="text-gray-dark">Thank you for your help!! 🥰</span>
        </div>
      </div>
      <Button onClick={() => goForward(data)}>Back to home</Button>
    </div>
  );
}
