import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';
import TextField from '@/components/TextField';
import Link from 'next/link';

import SearchSvg from '@/assets/icons/search.svg';

export default function Invite() {
  return (
    <>
      <div className="bg-white rounded-[18px] px-[32px] pt-[21px] pb-[27px] mb-[23px]">
        <div className="flex items-center justify-between gap-[50px]">
          <div className="flex flex-col gap-[9px]">
            <span className="font-manrope-bold text-[22px] leading-[32px]">
              Invite your friends and earn up to $100!
            </span>
            <span className="text-gray-dark text-[14px] leading-[18px]">
              Earn $10 for each friend who sends $4 from a linked account within
              14 days of the invite.{' '}
              <Link href="#" className="text-blue">
                Terms apply.
              </Link>
            </span>
          </div>
          <Button className="w-[198px]">Share link</Button>
        </div>
      </div>
      <ProgressBar value={20} className="mb-[18px]" />
      <div className="flex justify-between text-[12px] mb-[23px]">
        <span>2 / 10 Referred</span>
        <span>$20 Earned</span>
      </div>
      <div className="bg-white rounded-[18px] px-[45px] pt-[34px] pb-[32px]">
        <TextField
          placeholder="Name, @username, email, phone"
          size="small"
          startAdornment={<SearchSvg />}
          className="mb-[20px]"
        />
        <div className="text-[18px] font-manrope-bold leading-[24px] mb-[9px]">
          Contacts
        </div>
        <div className="grid grid-cols-1 gap-[9px]">
          <div className="bg-gray-pale rounded-[18px] h-[77px] flex items-center gap-[14px] px-[16px]">
            <div className="w-[39px] h-[39px] rounded-full bg-blue text-white flex items-center justify-center">
              G
            </div>
            <div className="flex flex-col gap-[4px]">
              <span className="text-[14px] leading-[20px">Gibby Radki</span>
              <span className="text-gray text-[12px] leading-[16px]">
                +1 264 2910 3002
              </span>
            </div>
          </div>
          <div className="bg-gray-pale rounded-[18px] h-[77px] flex items-center gap-[14px] px-[16px]">
            <div className="w-[39px] h-[39px] rounded-full bg-blue text-white flex items-center justify-center">
              S
            </div>
            <div className="flex flex-col gap-[4px]">
              <span className="text-[14px] leading-[20px">Sun Jun</span>
              <span className="text-gray text-[12px] leading-[16px]">
                +1 264 2910 3002
              </span>
            </div>
          </div>
          <div className="bg-gray-pale rounded-[18px] h-[77px] flex items-center gap-[14px] px-[16px]">
            <div className="w-[39px] h-[39px] rounded-full bg-blue text-white flex items-center justify-center">
              N
            </div>
            <div className="flex flex-col gap-[4px]">
              <span className="text-[14px] leading-[20px">Nayah Tantoh</span>
              <span className="text-gray text-[12px] leading-[16px]">
                +1 264 2910 3002
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
