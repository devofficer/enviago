'use client';

import React, { useState } from 'react';
import IconButton from '@/components/IconButton';
import PenSvg from '@/assets/icons/pen.svg';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import TextField from '@/components/TextField';
import Dialog from '@/components/Dialog';
import Divider from '@/components/Divider';

export default function Profile() {
  const [openCover, setOpenCover] = useState(false);

  return (
    <>
      <div>
        <div
          onClick={() => setOpenCover(true)}
          className="w-full h-[225px] bg-blue rounded-[25px] pt-[74px] mb-[82px] relative"
        >
          <div className="font-manrope-bold text-white text-[22px] leading-[32px] text-center mb-[7px]">
            Elwin Sharvill
          </div>
          <div className="font-manrope-bold text-[18px] leading-[24px] text-white/70 text-center mb-[38px]">
            @sharvillelwin
          </div>
          <Avatar className="mx-auto" url="/images/avatars/male.png" />
          <IconButton
            variant="custom"
            className="absolute right-[55px] top-[32px]"
          >
            <PenSvg
              width={36}
              height={36}
              className="w-[36px] h-[36px] rounded-full"
            />
          </IconButton>
        </div>
        <div className="grid grid-cols-2 gap-[15px] mb-[24px]">
          <div className="border border-gray-trans rounded-[15px] px-[16px] py-[25px] font-manrope-semibold text-gray text-[14px]">
            enviago.com/<span className="text-purple">@sharvillelwin</span>
          </div>
          <Button>Share link</Button>
        </div>
        <div className="text-[14px] text-dark mb-[10px]">Price points</div>
        <p className="text-[14px] text-gray-dark mb-[23px]">
          Select the amounts other users can send to you when logged out.
        </p>
        <div className="flex flex-wrap gap-[7px] mb-[28px]">
          <div className="w-[85px] bg-blue text-white text-center py-[7px] rounded-full">
            $20
          </div>
          <div className="w-[85px] bg-blue text-white text-center py-[7px] rounded-full">
            $50
          </div>
          <div className="w-[85px] bg-gray text-white/50 text-center py-[7px] rounded-full">
            $75
          </div>
          <div className="w-[85px] bg-blue text-white text-center py-[7px] rounded-full">
            $100
          </div>
          <div className="w-[85px] bg-blue text-white text-center py-[7px] rounded-full">
            $150
          </div>
          <div className="w-[85px] bg-gray text-white/50 text-center py-[7px] rounded-full">
            $200
          </div>
          <div className="w-[85px] bg-blue text-white text-center py-[7px] rounded-full">
            $250
          </div>
          <div className="w-[85px] bg-gray text-white/50 text-center py-[7px] rounded-full">
            $500
          </div>
        </div>
        <div className="text-[14px] text-dark mb-[15px]">Bio message</div>
        <TextField
          variant="multilined"
          color="secondary"
          placeholder="Tell other users something about you"
        />
      </div>
      <Dialog
        open={openCover}
        onClose={() => setOpenCover(false)}
        className="w-[388px] rounded-[15px] px-[28px] pt-[15px] pb-[28px]"
      >
        <div className="text-[18px] font-manrope-bold mb-[19px]">
          Select cover image
        </div>
        <div className="grid grid-cols-1 gap-[13px] mb-[21px]">
          <div className="h-[106px] rounded-[25px] bg-blue"></div>
          <div className="h-[106px] rounded-[25px] bg-green"></div>
          <div className="h-[106px] rounded-[25px] bg-orange"></div>
          <div className="h-[106px] rounded-[25px] bg-gray"></div>
        </div>
        <Divider className="mb-[18px]">or</Divider>
        <Button>Upload your photo</Button>
      </Dialog>
    </>
  );
}
