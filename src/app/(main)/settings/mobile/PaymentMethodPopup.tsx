import { useState } from 'react';
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import Popup, { PopupProps } from '@/components/Popup';
import LangSwitcher from '@/parts/LangSwitcher';
import PaymentMethod from '@/parts/PaymentMethod';
import TextField from '@/components/TextField';
import Select from '@/components/Select';

import MasterCardSvg from '@/assets/master-card.svg';

export default function PaymentMethodPopup({ open, onClose }: PopupProps) {
  const [openAddCard, setOpenAddCard] = useState(false);
  const [openLinkBank, setOpenLinkBank] = useState(false);

  return (
    <>
      {/* Payment Method main popup */}
      <Popup
        open={open}
        onClose={onClose}
        className="h-[100vh] bg-gray-pale px-[28px] py-[20px] flex flex-col justify-between"
      >
        <div className="mb-[20px]">
          <div className="flex items-center justify-between mb-[30px]">
            <IconButton icon="backward" color="secondary" onClick={onClose} />
            <span className="text-[14px]">Payment methods</span>
            <LangSwitcher />
          </div>
          <PaymentMethod className="gap-[16px]" itemClass="bg-white" />
        </div>
        <div className="grid grid-cols-1 gap-[18px]">
          <Button onClick={() => setOpenLinkBank(true)}>
            Connect new bank account
          </Button>
          <Button variant="outlined" onClick={() => setOpenAddCard(true)}>
            Add new credit card
          </Button>
        </div>
      </Popup>

      {/* Add new card popup */}
      <Popup
        open={openAddCard}
        onClose={() => setOpenAddCard(false)}
        className="h-[100vh] bg-gray-pale pt-[20px] flex flex-col justify-between"
      >
        <div className="flex items-center justify-between px-[28px] mb-[22px]">
          <IconButton
            icon="backward"
            color="secondary"
            onClick={() => setOpenAddCard(false)}
          />
          <span className="text-[14px]">Add credit card</span>
          <LangSwitcher />
        </div>
        <div className="flex flex-col flex-grow justify-between bg-white rounded-t-[30px] px-[22px] pt-[30px] pb-[54px]">
          <div className="grid grid-cols-1 gap-[14px] mb-[20px]">
            <TextField placeholder="Name on the card" value="Anne Novak" />
            <TextField
              placeholder="Card number"
              value="2712-2718-2917-8293"
              endAdornment={<MasterCardSvg />}
            />
            <div className="grid grid-cols-2 gap-[14px]">
              <TextField placeholder="Expiration date" value="12/01" />
              <TextField placeholder="CVV" value="829" />
            </div>
            <Select
              placeholder="Country"
              value="United States"
              items={['United States']}
            />
          </div>
          <Button className="col-span-2" onClick={() => setOpenAddCard(false)}>
            Save
          </Button>
        </div>
      </Popup>

      {/* Link bank account */}
      <Popup
        open={openLinkBank}
        onClose={() => setOpenLinkBank(false)}
        className="h-[100vh] bg-gray-pale pt-[20px] flex flex-col justify-between"
      >
        <div className="flex items-center justify-between px-[28px] mb-[22px]">
          <IconButton
            icon="backward"
            color="secondary"
            onClick={() => setOpenLinkBank(false)}
          />
          <span className="text-[14px]">Link bank account</span>
          <LangSwitcher />
        </div>
        <div className="flex flex-col flex-grow justify-between bg-white rounded-t-[30px] px-[22px] pt-[30px] pb-[54px]">
          <div className="grid grid-cols-1 gap-[14px] mb-[20px]">
            <TextField placeholder="Full name" />
            <TextField placeholder="Routing number" />
            <TextField placeholder="Account number" />
            <TextField placeholder="Confirm account number" />
          </div>
          <Button className="col-span-2" onClick={() => setOpenLinkBank(false)}>
            Save
          </Button>
        </div>
      </Popup>
    </>
  );
}
