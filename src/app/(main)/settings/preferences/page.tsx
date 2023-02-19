'use client';

import React, { useState } from 'react';
import Switch from '@/components/Switch';
import LocationSvg from '@/assets/location.svg';

export default function Preferences() {
  const [notifyEnabled, setNotifyEnabled] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-[21px]">
      <div className="rounded-[12px] px-[16px] py-[16px] bg-white">
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
      <div>
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
      </div>
    </div>
  );
}
