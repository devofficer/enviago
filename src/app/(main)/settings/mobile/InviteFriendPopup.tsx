import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import Popup, { PopupProps } from '@/components/Popup';
import LangSwitcher from '@/parts/LangSwitcher';
import TextField from '@/components/TextField';
import ProgressBar from '@/components/ProgressBar';

import SearchSvg from '@/assets/icons/search.svg';
import Link from 'next/link';

export default function InviteFriendPopup({ open, onClose }: PopupProps) {
  return (
    <Popup
      open={open}
      onClose={onClose}
      className="h-[100vh] bg-gray-pale p-[20px]"
    >
      <div className="flex items-center justify-between mb-[50px]">
        <IconButton icon="backward" color="secondary" onClick={onClose} />
        <span className="text-[14px]">Payment methods</span>
        <LangSwitcher />
      </div>
      <p className="px-[28px] text-center font-manrope-bold text-[22px] leading-[32px] mb-[21px]">
        Invite your friends.
        <br />
        Earn up to $100!
      </p>
      <p className="px-[24px] text-center text-gray-dark text-[14px] leading-[18px] mb-[25px]">
        Earn $10 for each friend who sends $4 from a linked account within 14
        days of the invite.{' '}
        <Link href="#" className="text-blue">
          Terms apply.
        </Link>
      </p>
      <Button className="mb-[25px]">Share link</Button>
      <ProgressBar value={20} className="mb-[18px]" />
      <div className="flex justify-between text-[12px] mb-[28px]">
        <span>2 / 10 Referred</span>
        <span>$20 Earned</span>
      </div>
      <div className="bg-white rounded-[18px] px-[26px] py-[32px]">
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
    </Popup>
  );
}
