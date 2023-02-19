import Button from '@/components/Button';
import BankSvg from '@/assets/bank.svg';
import FriendSvg from '@/assets/friend.svg';
import ContactSvg from '@/assets/contact.svg';
import CurrencySvg from '@/assets/currency.svg';
import PreferencesSvg from '@/assets/preferences.svg';
import LINKS from '@/utils/constants/links';

export default function Settings() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-[16px]">
      <div className="rounded-[30px] h-[106px] bg-white hover:bg-blue group flex justify-between items-center px-[31px]">
        <div>
          <div className="text-[12px] text-purple/70 mb-[8px] group-hover:text-white/70">
            My Wallet
          </div>
          <div className="text-purple font-manrope-bold text-[26px] group-hover:text-white">
            $420,03
          </div>
        </div>
        <Button
          size="xsmall"
          className="bg-blue group-hover:bg-white group-hover:text-purple"
        >
          Withdraw
        </Button>
      </div>
      <div className="rounded-[30px] h-[106px] bg-white hover:bg-blue group flex justify-between items-center pl-[39px] pr-[29px]">
        <div className="flex items-center gap-[32px]">
          <BankSvg className="w-[29px] h-auto fill-blue group-hover:fill-white" />
          <span className="text-[12px] text-purple group-hover:text-white">
            Payment methods
          </span>
        </div>
        <Button
          size="xsmall"
          className="bg-blue group-hover:bg-white group-hover:text-purple"
          href={LINKS.settings.payment.path}
        >
          Manage
        </Button>
      </div>
      <div className="rounded-[30px] h-[106px] bg-white hover:bg-blue group flex justify-between items-center pl-[39px] pr-[29px]">
        <div className="flex items-center gap-[32px]">
          <FriendSvg className="w-[22px] h-auto fill-blue group-hover:fill-white" />
          <span className="text-[12px] text-purple group-hover:text-white">
            Invite Friends
          </span>
        </div>
      </div>
      <div className="rounded-[30px] h-[106px] bg-white hover:bg-blue group flex justify-between items-center pl-[39px] pr-[29px]">
        <div className="flex items-center gap-[32px]">
          <ContactSvg className="w-[28px] h-auto fill-blue group-hover:fill-white" />
          <span className="text-[12px] text-purple group-hover:text-white">
            My Contacts
          </span>
        </div>
      </div>
      <div className="rounded-[30px] h-[106px] bg-white hover:bg-blue group flex justify-between items-center pl-[39px] pr-[29px]">
        <div className="flex items-center gap-[32px]">
          <CurrencySvg className="w-[29px] h-auto fill-blue group-hover:fill-white" />
          <div className="flex flex-col gap-[6px]">
            <span className="text-[12px] text-purple group-hover:text-white">
              Currency
            </span>
            <span className="text-[14px] text-gray">$ (CPL)</span>
          </div>
        </div>
        <Button
          size="xsmall"
          className="bg-blue group-hover:bg-white group-hover:text-purple"
        >
          Change
        </Button>
      </div>
      <div className="rounded-[30px] h-[106px] bg-white hover:bg-blue group flex justify-between items-center pl-[39px] pr-[29px]">
        <div className="flex items-center gap-[32px]">
          <PreferencesSvg className="w-[25px] h-auto fill-blue group-hover:fill-white" />
          <span className="text-[12px] text-purple group-hover:text-white">
            Manage Preferences
          </span>
        </div>
      </div>
      <div className="rounded-[30px] h-[106px] bg-white hover:bg-blue group flex justify-between items-center pl-[39px] pr-[29px]">
        <div className="flex items-center gap-[32px]">
          <PreferencesSvg className="w-[25px] h-auto fill-blue group-hover:fill-white" />
          <span className="text-[12px] text-purple group-hover:text-white">
            Edit contact info
          </span>
        </div>
      </div>
    </div>
  );
}