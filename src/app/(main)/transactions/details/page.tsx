'use client';

import Divider from '@/components/Divider';
import IconButton from '@/components/IconButton';
import Image from 'next/image';
import TransferSvg from '@/assets/transfer.svg';
import TextField from '@/components/TextField';
import Popup from '@/components/Popup';
import { useState } from 'react';

export default function TransactionDetails() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center mb-[30px]">
        <IconButton icon="backward" color="secondary" />
        <div className="flex-grow text-black text-center text-[.875rem] leading-[1.25rem]">
          Transaction details
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-[43px]">
        <div className="bg-white rounded-[15px] pt-[30px] pb-[22px] px-[54px]">
          <div className="pt-[18px] pb-[16px] flex flex-col items-center justify-center bg-gray bg-opacity-[18%] rounded-[15px] mb-[19px]">
            <span className="text-green font-manrope-bold text-[24px] leading-[32px] mb-4">
              +$500
            </span>
            <span className="text-gray text-[12px] leading-[16px]">
              Chilean peso
            </span>
          </div>
          <div className="text-gray-steel text-[.875rem] leading-[18px] mb-[12px]">
            From
          </div>
          <div className="flex items-center mb-[12px]">
            <Image
              src="/images/avatars/female.png"
              width={101}
              height={100}
              alt="avatar"
              className="rounded-full w-[48px] h-[48px] mr-[15px]"
            />
            <span className="text-[.875rem] text-dark leading-[20px]">
              Quinten Kortum
            </span>
          </div>
          <Divider color="secondary" className="mb-[18px]" />
          <div className="flex items-center justify-between text-[13px] leading-[18px] mb-[25px]">
            <span className="text-black">Transaction Date:</span>
            <span className="text-gray-dark">Jan 14, 2023</span>
          </div>
          <Divider color="secondary" className="mb-[18px]" />
          <div className="flex items-center justify-between text-[13px] leading-[18px]">
            <span className="text-black">Status:</span>
            <span className="text-green">Completed</span>
          </div>
        </div>
        <div>
          <div className="text-[18px] leading-[24px] font-manrope-bold mb-[12px]">
            3 comments
          </div>
          <div className="mb-[13px]">
            <div
              className="px-[16px] py-[18px] flex items-center bg-white rounded-[15px] mb-[12px]"
              onClick={() => setPopupOpen(true)}
            >
              <Image
                src="/images/avatars/female.png"
                width={101}
                height={100}
                alt="avatar"
                className="w-[40px] h-[40px] mr-[12px]"
              />
              <div>
                <div className="text-[.875rem] text-black">
                  <span className="font-manrope-bold mr-[12px]">Meng Ru</span>
                  <span className="font-manrope-medium">1h</span>
                </div>
                <span className="text-gray-dark text-[13px] leading-[18px]">
                  What is this for?
                </span>
              </div>
            </div>
            <div
              className="px-[16px] py-[18px] flex items-center bg-white rounded-[15px] mb-[12px]"
              onClick={() => setPopupOpen(true)}
            >
              <Image
                src="/images/avatars/female.png"
                width={101}
                height={100}
                alt="avatar"
                className="w-[40px] h-[40px] mr-[12px]"
              />
              <div>
                <div className="text-[.875rem] text-black">
                  <span className="font-manrope-bold mr-[12px]">
                    Quinten Kortum
                  </span>
                  <span className="font-manrope-medium">1h</span>
                </div>
                <span className="text-gray-dark text-[13px] leading-[18px]">
                  <span className="text-blue">@mengru</span> it???s for Anne???s
                  birthday!
                </span>
              </div>
            </div>
            <div
              className="px-[16px] py-[18px] flex items-center bg-white rounded-[15px] mb-[12px]"
              onClick={() => setPopupOpen(true)}
            >
              <Image
                src="/images/avatars/female.png"
                width={101}
                height={100}
                alt="avatar"
                className="w-[40px] h-[40px] mr-[12px]"
              />
              <div>
                <div className="text-[.875rem] text-black">
                  <span className="font-manrope-bold mr-[12px]">Meng Ru</span>
                  <span className="font-manrope-medium">1h</span>
                </div>
                <span className="text-gray-dark text-[13px] leading-[18px]">
                  Oh okay, paid! ????
                </span>
              </div>
            </div>
          </div>
          <TextField
            variant="filled"
            placeholder="Comment???"
            size="small"
            endAdornment={<TransferSvg />}
          />
        </div>
      </div>
      <Popup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        className="flex flex-col justify-between bg-white rounded-t-[30px] mt-[20vh] h-[80vh] px-[25px] py-[41px]"
      >
        <div className="px-[16px] py-[18px] flex items-center bg-gray-pale rounded-[15px] mb-[12px]">
          <Image
            src="/images/avatars/female.png"
            width={101}
            height={100}
            alt="avatar"
            className="w-[40px] h-[40px] mr-[12px]"
          />
          <div>
            <div className="text-[.875rem] text-black">
              <span className="font-manrope-bold mr-[12px]">Meng Ru</span>
              <span className="font-manrope-medium">1h</span>
            </div>
            <span className="text-gray-dark text-[13px] leading-[18px]">
              What is this for?
            </span>
          </div>
        </div>
        <TextField
          variant="filled"
          color="secondary"
          placeholder="Comment???"
          size="small"
          endAdornment={<TransferSvg />}
        />
      </Popup>
    </div>
  );
}
