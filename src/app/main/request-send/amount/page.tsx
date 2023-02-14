'use client';

import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import TextField from '@/components/TextField';
import { useContext, useState } from 'react';
import PaymentMethod from '../payment-method';
import TabContext from '../tab-context';
import Dialog from '@/components/Dialog';
import ConfirmSvg from '@/assets/confirm.svg';
import Image from 'next/image';
import Divider from '@/components/Divider';

export default function Amount() {
  const { tab } = useContext(TabContext);
  const [openDialog, setOpenDialog] = useState(true);

  return (
    <>
      <div className="bg-white rounded-[18px] px-[45px] pt-[30px] pb-[24px] mb-[28px]">
        <div className="flex items-center mb-[17px]">
          <IconButton
            icon="backward"
            variant="custom"
            className="w-[20px] h-auto mr-[22px]"
          />
          <span className="text-[18px] leading-[24px] font-manrope-bold mr-[22px]">
            Request money from
          </span>
          <Avatar
            editable={false}
            url="/images/avatars/female.png"
            className="w-[39px] h-auto mr-[15px]"
          />
          <span className="text-[14px] font-manrope-bold">Gabie Sheber</span>
        </div>
        <div className="flex gap-[10px] font-manrope-bold text-dark mb-[22px]">
          <span className="text-[18px] text-dark/50">$</span>
          <span className="text-[48px] leading-[40px]">2,600</span>
          <span className="text-[14px]">CLP</span>
        </div>
        <TextField placeholder="Message" value="For rent" />
      </div>
      {tab === 'Send' && <PaymentMethod />}
      <Button onClick={() => setOpenDialog(true)}>Continue</Button>
      <Dialog
        open={openDialog}
        className="px-[34px] py-[23px] w-[388px]"
        onClose={() => setOpenDialog(false)}
      >
        <ConfirmSvg className="mx-auto mb-[15px]" />
        <p className="font-manrope-bold text-[22px] text-center leading-[32px] text-black mb-[13px]">
          You’ve sent payment request to{' '}
          <span className="text-blue">Gibby Radki</span>
        </p>
        <div className="px-[20px]">
          <div className="flex flex-col items-center justify-center mx-[12px] pt-[18px] pb-[16px] bg-gray bg-opacity-[6%] rounded-[15px] mb-[14px]">
            <span className="text-blue font-manrope-bold text-[24px] leading-[32px] mb-4">
              $2,600
            </span>
            <span className="text-gray text-[12px] leading-[16px]">
              Chilean peso
            </span>
          </div>
          <div className="text-gray-steel text-[.875rem] leading-[18px] mb-[12px]">
            Requested from
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
              Gibby Radki
            </span>
          </div>
          <Divider color="secondary" className="mb-[20px]" />
          <div className="flex items-center justify-between text-[13px] leading-[18px] mb-[25px]">
            <span className="text-black">Request Date:</span>
            <span className="text-gray-dark">Jan 14, 2023</span>
          </div>
        </div>
      </Dialog>
    </>
  );
}
