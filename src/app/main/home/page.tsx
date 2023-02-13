'use client';

import { useState } from 'react';
import Wallet from '@/components/Wallet';
import RequestSvg from '@/assets/request.svg';
import ShareSvg from '@/assets/share.svg';
import SendSvg from '@/assets/send.svg';
import TransactionCard from '@/components/TransactionCard';
import transactions from '@/mock/transactions';
import Dialog from '@/components/Dialog';
import NotifySvg from '@/assets/notify.svg';
import Button from '@/components/Button';

export default function Home() {
  const [openDialog, setOpenDialog] = useState(true);

  return (
    <div>
      <div className="flex flex-wrap">
        <Wallet className="lg:mr-[16px] mb-[16px] w-full lg:w-max" />
        <div className="flex flex-col w-[121px] h-[106px] items-center justify-center bg-white rounded-[18px] mr-[14px] mb-[16px]">
          <RequestSvg className="mb-[9px]" />
          <span className="text-gray text-[.875rem]">Request</span>
        </div>
        <div className="flex flex-col w-[121px] h-[106px] items-center justify-center bg-white rounded-[18px] mr-[14px] mb-[16px]">
          <ShareSvg className="mb-[9px]" />
          <span className="text-gray text-[.875rem]">Share URL</span>
        </div>
        <div className="flex flex-col w-[121px] h-[106px] items-center justify-center bg-white rounded-[18px] mb-[16px]">
          <SendSvg className="mb-[9px]" />
          <span className="text-gray text-[.875rem]">Send</span>
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
