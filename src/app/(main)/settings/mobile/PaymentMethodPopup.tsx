import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import Popup, { PopupProps } from '@/components/Popup';
import LangSwitcher from '@/parts/LangSwitcher';
import PaymentMethod from '@/parts/PaymentMethod';

export default function PaymentMethodPopup({ open, onClose }: PopupProps) {
  return (
    <Popup
      open={open}
      onClose={onClose}
      className="h-[100vh] bg-gray-pale px-[28px] py-[20px] flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-[30px]">
          <IconButton icon="backward" color="secondary" onClick={onClose} />
          <span className="text-[14px]">Payment methods</span>
          <LangSwitcher />
        </div>
        <PaymentMethod className="gap-[16px]" itemClass="bg-white" />
      </div>
      <div className="grid grid-cols-1 gap-[18px]">
        <Button>Connect new bank account</Button>
        <Button variant="outlined">Add new credit card</Button>
      </div>
    </Popup>
  );
}
