'use client';

import React from 'react';
import clsx from 'classnames';

import WalletSvg from '@/assets/wallet.svg';
import BankSvg from '@/assets/bank.svg';
import FriendSvg from '@/assets/friend.svg';
import ContactSvg from '@/assets/contact.svg';
import CurrencySvg from '@/assets/currency.svg';
import PreferencesSvg from '@/assets/preferences.svg';
import EditSvg from '@/assets/edit.svg';
import Wallet from '@/parts/Wallet';
import ArrowRightSvg from '@/assets/icons/arrow-right.svg';

export default function SettingsMobile() {
  const items = [
    {
      icon: WalletSvg,
      iconSize: 'w-[19.5px]',
      label: 'Withdraw balance',
      info: '$ 115.00',
    },
    {
      icon: BankSvg,
      iconSize: 'w-[19.5px]',
      label: 'Payment methods',
    },
    {
      icon: FriendSvg,
      iconSize: 'w-[15.3px]',
      label: 'Invite Friends',
    },
    {
      icon: ContactSvg,
      iconSize: 'w-[18.5px]',
      label: 'My Contacts',
    },
    {
      icon: CurrencySvg,
      iconSize: 'w-[19.5px]',
      label: 'Currency',
      info: '$ (CPL)',
    },
    {
      icon: PreferencesSvg,
      iconSize: 'w-[18.5px]',
      label: 'Manage preferences',
    },
    {
      icon: EditSvg,
      iconSize: 'w-[18.5px]',
      label: 'My Contacts',
    },
  ];

  return (
    <>
      <Wallet className="mb-[25px]" />
      <div className="grid grid-cols-1 gap-[15px]">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between text-[14px]"
          >
            <div className="flex items-center gap-[8px]">
              <div className="w-[40px] h-[40px] rounded-[15px] bg-white flex items-center justify-center">
                <item.icon
                  className={clsx('fill-blue h-auto', item.iconSize)}
                />
              </div>
              <span className="text-dark">{item.label}</span>
            </div>
            <div className="flex items-center gap-[17px]">
              {item.info && <span className="text-purple">{item.info}</span>}
              <div>
                <ArrowRightSvg className="w-[7px] h-auto" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
