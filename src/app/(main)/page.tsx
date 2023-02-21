'use client';

import { useState } from 'react';
import Wallet from '@/parts/Wallet';
import RequestSvg from '@/assets/request.svg';
import ShareSvg from '@/assets/share.svg';
import SendSvg from '@/assets/send.svg';
import TransactionCard from '@/parts/TransactionCard';
import transactions from '@/mock/transactions';
import Dialog from '@/components/Dialog';
import NotifySvg from '@/assets/notify.svg';
import Button from '@/components/Button';

export default function Home() {
  const [openDialog, setOpenDialog] = useState(true);

  return (
    <div className="px-[25px] pb-[104px] lg:px-[40px] lg:pb-[40px]">
      <div className="flex flex-wrap">
        <Wallet className="w-full mb-[16px] lg:mr-[16px] lg:w-max" />
        <div className="grid grid-cols-3 gap-[14px] flex-grow">
          <div className="flex flex-col p-[8px] items-center justify-center bg-white rounded-[18px] mb-[16px] lg:py-[16px]">
            <RequestSvg className="mb-[9px]" />
            <span className="text-gray text-[.875rem]">Request</span>
          </div>
          <div className="flex flex-col p-[8px] items-center justify-center bg-white rounded-[18px] mb-[16px] lg:py-[16px]">
            <ShareSvg className="mb-[9px]" />
            <span className="text-gray text-[.875rem]">Share URL</span>
          </div>
          <div className="flex flex-col p-[8px] items-center justify-center bg-white rounded-[18px] mb-[16px] lg:py-[16px]">
            <SendSvg className="mb-[9px]" />
            <span className="text-gray text-[.875rem]">Send</span>
          </div>
        </div>
      </div>
      <h1 className="font-manrope-bold text-[18px] leading-[24px] text-black mb-[17px]">
        Recent Activity
      </h1>
      {transactions.map((trans, idx) => (
        <TransactionCard key={idx} data={trans} className="mb-[16px]" />
      ))}
      <Dialog
        open={openDialog}
        className="px-[24px] py-[30px] w-[325px] text-center"
        onClose={() => setOpenDialog(false)}
      >
        <NotifySvg className="mx-auto mb-[15px]" />
        <p className="px-[22px] font-manrope-bold text-[22px] leading-[32px] text-black mb-[13px]">
          Stay on top of everything <span className="text-blue">Enviago</span>
        </p>
        <p className="text-[14px] text-gray-dark leading-[18px] mb-[34px]">
          Get updates on payments and more. You can change this any time in
          Settings.
        </p>
        <Button
          variant="contained"
          color="primary"
          className="mb-[6px]"
          onClick={() => setOpenDialog(false)}
        >
          Allow notifications
        </Button>
        <Button variant="naked" onClick={() => setOpenDialog(false)}>
          Not now
        </Button>
      </Dialog>
    </div>
  );
}
