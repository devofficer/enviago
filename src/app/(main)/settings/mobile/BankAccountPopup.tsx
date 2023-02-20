import IconButton from '@/components/IconButton';
import Popup, { PopupProps } from '@/components/Popup';
import TextField from '@/components/TextField';
import Button from '@/components/Button';
import LangSwitcher from '@/parts/LangSwitcher';

export default function BankAccountPopup({ open, onClose }: PopupProps) {
  return (
    <Popup
      open={open}
      onClose={onClose}
      className="h-[100vh] bg-gray-pale pt-[20px] flex flex-col justify-between"
    >
      <div className="flex items-center justify-between px-[28px] mb-[22px]">
        <IconButton icon="backward" color="secondary" onClick={onClose} />
        <span className="text-[14px]">Link bank account</span>
        <LangSwitcher />
      </div>
      <div className="flex flex-col flex-grow justify-between bg-white rounded-t-[30px] px-[22px] pt-[30px] pb-[54px]">
        <div className="grid grid-cols-1 gap-[14px] mb-[20px]">
          <TextField placeholder="Full name" value="Jagat Shahidullah" />
          <TextField placeholder="Routing number" value="623852453" />
          <TextField placeholder="Account number" value="1234567" />
        </div>
        <Button className="col-span-2" onClick={onClose}>
          Remove bank accont
        </Button>
      </div>
    </Popup>
  );
}
