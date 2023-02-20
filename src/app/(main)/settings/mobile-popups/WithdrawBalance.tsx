import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import Popup from '@/components/Popup';
import TextField from '@/components/TextField';
import Keyboard from '@/parts/Keyboard';
import LangSwitcher from '@/parts/LangSwitcher';
import { SettingsPopup } from '../mobile';

export default function WithdrawBalancePopup({ open, onClose }: SettingsPopup) {
  return (
    <Popup
      open={open}
      onClose={onClose}
      className="h-[100vh] bg-gray-pale flex flex-col justify-between"
    >
      <div className="mx-[28px] my-[20px] flex items-center justify-between">
        <IconButton icon="backward" color="secondary" onClick={onClose} />
        <span className="text-[14px]">Withdraw balance</span>
        <LangSwitcher />
      </div>
      <div className="flex flex-col items-center px-[28px] mb-[20px]">
        <div className="text-[15px] leading-[20px] mb-[25px]">
          Balance: <span className="text-purple">$ 115.00</span>
        </div>
        <TextField variant="currency" className="mb-[44px]" value="50.00" />
        <Button onClick={onClose}>Withdraw</Button>
      </div>
      <Keyboard className="pb-[57px] pt-[27px] rounded-t-[30px]" />
    </Popup>
  );
}
