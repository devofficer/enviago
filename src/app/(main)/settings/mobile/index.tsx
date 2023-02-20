'use client';

import React, { useState } from 'react';
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

import WithdrawBalancePopup from './WithdrawBalancePopup';
import PaymentMethodPopup from './PaymentMethodPopup';
import InviteFriendPopup from './InviteFriendPopup';
import MyContactPopup from './MyContactPopup';
import EditContactPopup from './EditContactPopup';
import ManagePreferencePopup from './ManagePreferencePopup';
import CurrencyPopup from './CurrencyPopup';

enum SettingItem {
  none,
  withdrawBalance,
  paymentMethods,
  inviteFriends,
  myContacts,
  currency,
  managePreferences,
  editContactInfo,
}

const settingsItems = [
  {
    id: SettingItem.withdrawBalance,
    icon: WalletSvg,
    iconSize: 'w-[19.5px]',
    label: 'Withdraw balance',
    info: '$ 115.00',
    popup: WithdrawBalancePopup,
  },
  {
    id: SettingItem.paymentMethods,
    icon: BankSvg,
    iconSize: 'w-[19.5px]',
    label: 'Payment methods',
    popup: PaymentMethodPopup,
  },
  {
    id: SettingItem.inviteFriends,
    icon: FriendSvg,
    iconSize: 'w-[15.3px]',
    label: 'Invite Friends',
    popup: InviteFriendPopup,
  },
  {
    id: SettingItem.myContacts,
    icon: ContactSvg,
    iconSize: 'w-[18.5px]',
    label: 'My Contacts',
    popup: MyContactPopup,
  },
  {
    id: SettingItem.currency,
    icon: CurrencySvg,
    iconSize: 'w-[19.5px]',
    label: 'Currency',
    info: '$ (CPL)',
    popup: CurrencyPopup,
  },
  {
    id: SettingItem.managePreferences,
    icon: PreferencesSvg,
    iconSize: 'w-[18.5px]',
    label: 'Manage preferences',
    popup: ManagePreferencePopup,
  },
  {
    id: SettingItem.editContactInfo,
    icon: EditSvg,
    iconSize: 'w-[18.5px]',
    label: 'Edit contact info',
    popup: EditContactPopup,
  },
];

export default function SettingsMobile() {
  const [activeItem, setActiveItem] = useState(SettingItem.none);

  const handleClick = (item: SettingItem) => {
    setActiveItem(item);
  };

  const handleClosePopup = () => {
    setActiveItem(SettingItem.none);
  };

  return (
    <>
      <Wallet className="mb-[25px]" />
      <div className="grid grid-cols-1 gap-[15px]">
        {settingsItems.map((item) => (
          <React.Fragment key={item.id}>
            <div
              onClick={() => handleClick(item.id)}
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
                <ArrowRightSvg className="w-[7px] h-auto" />
              </div>
            </div>
            {item.popup && (
              <item.popup
                open={activeItem === item.id}
                onClose={handleClosePopup}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
