'use client';

import React, { useState } from 'react';
import LINKS from '@/utils/constants/links';
import Link from 'next/link';
import Dialog from '@/components/Dialog';
import Select from '@/components/Select';
import TextField from '@/components/TextField';
import Button from '@/components/Button';

import BankSvg from '@/assets/bank.svg';
import FriendSvg from '@/assets/friend.svg';
import ContactSvg from '@/assets/contact.svg';
import CurrencySvg from '@/assets/currency.svg';
import PreferencesSvg from '@/assets/preferences.svg';
import EyeHiddenSvg from '@/assets/eye-hidden.svg';
import EditSvg from '@/assets/edit.svg';

export default function SettingsDesktop() {
  const [openCurrency, setOpenCurrency] = useState(false);
  const [openWithdraw, setOpenWithdraw] = useState(false);
  const [openContactInfo, setOpenContactInfo] = useState(false);
  const [currency, setCurrency] = useState('');

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
          onClick={() => setOpenWithdraw(true)}
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
      <Link
        href={LINKS.settings.invite.path}
        className="rounded-[30px] h-[106px] bg-white hover:bg-blue group flex justify-between items-center pl-[39px] pr-[29px]"
      >
        <div className="flex items-center gap-[32px]">
          <FriendSvg className="w-[22px] h-auto fill-blue group-hover:fill-white" />
          <span className="text-[12px] text-purple group-hover:text-white">
            Invite Friends
          </span>
        </div>
      </Link>
      <Link
        href={LINKS.settings.myContacts.path}
        className="rounded-[30px] h-[106px] bg-white hover:bg-blue group flex justify-between items-center pl-[39px] pr-[29px]"
      >
        <div className="flex items-center gap-[32px]">
          <ContactSvg className="w-[28px] h-auto fill-blue group-hover:fill-white" />
          <span className="text-[12px] text-purple group-hover:text-white">
            My Contacts
          </span>
        </div>
      </Link>
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
          onClick={() => setOpenCurrency(true)}
        >
          Change
        </Button>
      </div>
      <Link
        href={LINKS.settings.preferences.path}
        className="rounded-[30px] h-[106px] bg-white hover:bg-blue group flex justify-between items-center pl-[39px] pr-[29px]"
      >
        <div className="flex items-center gap-[32px]">
          <PreferencesSvg className="w-[25px] h-auto fill-blue group-hover:fill-white" />
          <span className="text-[12px] text-purple group-hover:text-white">
            Manage Preferences
          </span>
        </div>
      </Link>
      <div
        onClick={() => setOpenContactInfo(true)}
        className="rounded-[30px] h-[106px] bg-white hover:bg-blue group flex justify-between items-center pl-[39px] pr-[29px]"
      >
        <div className="flex items-center gap-[32px]">
          <EditSvg className="w-[25px] h-auto fill-blue group-hover:fill-white" />
          <span className="text-[12px] text-purple group-hover:text-white">
            Edit contact info
          </span>
        </div>
      </div>
      <Dialog
        open={openCurrency}
        onClose={() => setOpenCurrency(false)}
        className="w-[388px] rounded-[15px] px-[25px] pt-[17px] pb-[25px]"
      >
        <div className="text-[18px] font-manrop-bold leading-[24px] mb-[14px]">
          Select currency
        </div>
        <Select
          placeholder="Currency"
          items={['$ (CPL)', 'Brazilian real (R$)']}
          value={currency}
          onChange={(value) => setCurrency(value)}
        />
      </Dialog>
      <Dialog
        open={openWithdraw}
        onClose={() => setOpenWithdraw(false)}
        className="w-[388px] rounded-[15px] px-[26px] py-[105px] flex flex-col items-center"
      >
        <div className="text-[15px] leading-[20px] mb-[25px]">
          Balance: <span className="text-purple">$ 115.00</span>
        </div>
        <TextField variant="currency" className="mb-[44px]" value="50.00" />
        <Button>Withdraw</Button>
      </Dialog>
      <Dialog
        open={openContactInfo}
        closeBtn={true}
        onClose={() => setOpenContactInfo(false)}
        className="w-[388px] rounded-[15px] px-[28px] pt-[15px] pb-[37px] "
      >
        <div className="text-[18px] font-manrop-bold leading-[24px] mb-[19px]">
          My contact info
        </div>
        <div className="grid grid-cols-1 gap-[15px]">
          <TextField placeholder="Full name" value="Elwin Sharvill" />
          <TextField placeholder="Username" value="@sharvillelwin" />
          <TextField placeholder="Email" value="elwinsharwill@mail.com" />
          <TextField placeholder="Phone" value="+1 264 2910 3002" />
          <TextField
            placeholder="Password"
            value="1234567890"
            password
            endAdornment={<EyeHiddenSvg />}
          />
          <Button>Save changes</Button>
        </div>
      </Dialog>
    </div>
  );
}
