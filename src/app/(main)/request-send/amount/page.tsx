'use client';

import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import TextField from '@/components/TextField';
import { useContext, useState } from 'react';
import TabContext from '../../../../contexts/TabContext';
import Dialog from '@/components/Dialog';
import ConfirmSvg from '@/assets/confirm.svg';
import Image from 'next/image';
import Divider from '@/components/Divider';
import LoadingSvg from '@/assets/loading.svg';
import PaymentMethod from '@/parts/PaymentMethod';

export default function Amount() {
  const { tab } = useContext(TabContext);
  const [openRequestDialog, setOpenRequestDialog] = useState(false);
  const [openProcessingDialog, setOpenProcessingDialog] = useState(false);
  const [openSendDialog, setOpenSendDialog] = useState(false);

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
      {tab === 'Send' && (
        <div className="pt-[30px] pb-[22px] px-[45px] bg-white rounded-[18px] mb-[16px]">
          <div className="font-manrope-bold text-[18px] leading-[24px] mb-[20px]">
            Payment Method
          </div>
          <PaymentMethod />
        </div>
      )}
      <Button onClick={() => setOpenProcessingDialog(true)}>Continue</Button>

      <Dialog
        open={openProcessingDialog}
        closeBtn={false}
        onClose={() => {
          setOpenProcessingDialog(false);
          if (tab === 'Request') {
            setOpenRequestDialog(true);
          } else {
            setOpenSendDialog(true);
          }
        }}
        className="text-center w-[323px] bg-white rounded-[25px] px-[90px] py-[40px]"
      >
        <LoadingSvg className="mx-auto mb-[19px]" />
        <div className="font-manrope-bold text-[22px] leading-[32px] mb-[8px]">
          Processing...
        </div>
        <div className="text-[14px] text-gray-dark leading-[18px]">
          We are processing your paymet.
        </div>
      </Dialog>
      <Dialog
        open={openRequestDialog}
        className="px-[34px] py-[23px] w-[388px]"
        onClose={() => setOpenRequestDialog(false)}
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
      <Dialog
        open={openSendDialog}
        className="px-[34px] py-[23px] w-[388px]"
        onClose={() => setOpenSendDialog(false)}
      >
        <ConfirmSvg className="mx-auto mb-[15px]" />
        <p className="font-manrope-bold text-[22px] text-center leading-[32px] text-black mb-[13px]">
          You’ve successfully transferred money.
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
            Sent to
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
