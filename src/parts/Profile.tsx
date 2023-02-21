import IconButton from '@/components/IconButton';
import PenSvg from '@/assets/icons/pen.svg';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';

export default function Profile() {
  return (
    <div className="pt-[44px] pl-[29px] pr-[17px] bg-[url(/images/wallet-bg.svg)] bg-top bg-no-repeat bg-[length:100%_184px]">
      <div className="flex items-center justify-between mb-[8px]">
        <span className="font-manrope-bold text-white text-[22px] leading-[32px] mb-[11px]">
          Indira Shree
        </span>
        <IconButton variant="custom">
          <PenSvg
            width={36}
            height={36}
            className="w-[36px] h-[36px] rounded-full"
          />
        </IconButton>
      </div>
      <div className="font-manrope-bold text-[18px] leading-[24px] text-white/70 mb-[23px]">
        @indirashree
      </div>
      <Avatar className="mx-auto mb-[26px]" url="/images/avatars/female.png" />
      <p className="font-manrope-semibold text-gray-dark text-center mb-[22px]">
        A writer, digital marketing pioneer, and Wall Street Journal
        best-selling author who inspires and empowers people.
      </p>
      <div className="border border-gray-trans rounded-[15px] px-[16px] py-[26px] font-manrope-semibold text-gray text-[.875rem] mb-[10px]">
        enviago.com/<span className="text-purple">@indirashree</span>
      </div>
      <Button>Share link</Button>
    </div>
  );
}
