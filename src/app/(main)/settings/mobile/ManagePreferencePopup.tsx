'use client';

import React, { useState } from 'react';
import IconButton from '@/components/IconButton';
import Popup, { PopupProps } from '@/components/Popup';
import Switch from '@/components/Switch';
import LocationSvg from '@/assets/location.svg';
import LangSwitcher from '@/parts/LangSwitcher';

export default function ManagePreferencePopup({ open, onClose }: PopupProps) {
  const [notifyEnabled, setNotifyEnabled] = useState(false);

  return (
    <Popup
      open={open}
      onClose={onClose}
      className="h-[100vh] bg-gray-pale px-[28px] pt-[20px] pb-[34px]"
    >
      <div className="flex items-center justify-between mb-[18px]">
        <IconButton icon="backward" color="secondary" onClick={onClose} />
        <span className="text-[14px]">Manage preferences</span>
        <LangSwitcher />
      </div>
      <div className="rounded-[12px] px-[16px] py-[16px] bg-white mb-[11px]">
        <div className="text-[#333333] text-[14px] mb-[27px]">General</div>
        <div className="flex items-center justify-between mb-[40px]">
          <span className="text-gray text-[12px]">Allow notifications</span>
          <Switch
            active={notifyEnabled}
            onChange={(active) => setNotifyEnabled(active)}
          />
        </div>
        <div className="flex items-center justify-between text-gray text-[12px] mb-[11px]">
          <span>Language</span>
          <span>English</span>
        </div>
      </div>
      <div className="rounded-[12px] px-[16px] py-[16px] bg-white">
        <div className="text-[#333333] text-[14px] mb-[27px]">Profile</div>
        <div className="flex items-center justify-between text-gray text-[12px] mb-[11px]">
          <div className="flex items-center gap-[16px]">
            <LocationSvg className="stroke-gray" />
            <span>Country of Residence</span>
          </div>
          <span>English</span>
        </div>
      </div>
    </Popup>
  );
}
