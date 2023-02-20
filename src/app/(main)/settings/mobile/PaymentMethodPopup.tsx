import { useState } from 'react';
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import Popup, { PopupProps } from '@/components/Popup';
import LangSwitcher from '@/parts/LangSwitcher';
import PaymentMethod from '@/parts/PaymentMethod';
import AddCardPopup from './AddCardPopup';
import LinkBankPopup from './LinkBankPopup';
import BankAccountPopup from './BankAccountPopup';

export default function PaymentMethodPopup({ open, onClose }: PopupProps) {
  const [openAddCard, setOpenAddCard] = useState(false);
  const [openLinkBank, setOpenLinkBank] = useState(false);
  const [openBankAccount, setOpenBankAccount] = useState(false);

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
          <PaymentMethod
            className="gap-[16px]"
            itemClass="bg-white"
            onSelect={() => setOpenBankAccount(true)}
          />
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
      <AddCardPopup open={openAddCard} onClose={() => setOpenAddCard(false)} />

      {/* Link bank account popup */}
      <LinkBankPopup
        open={openLinkBank}
        onClose={() => setOpenLinkBank(false)}
      />

      {/* Bank account popup */}
      <BankAccountPopup
        open={openBankAccount}
        onClose={() => setOpenBankAccount(false)}
      />
    </>
  );
}
