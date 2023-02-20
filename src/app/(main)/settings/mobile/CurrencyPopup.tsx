import IconButton from '@/components/IconButton';
import Popup, { PopupProps } from '@/components/Popup';
import Button from '@/components/Button';
import LangSwitcher from '@/parts/LangSwitcher';
import CURRENCIES from '@/utils/constants/currencies';

export default function CurrencyPopup({ open, onClose }: PopupProps) {
  return (
    <Popup
      open={open}
      onClose={onClose}
      className="h-[100vh] bg-gray-pale px-[28px] pt-[20px] flex flex-col"
    >
      <div className="flex items-center justify-between mb-[27px]">
        <IconButton icon="backward" color="secondary" onClick={onClose} />
        <span className="text-[14px]">Currency</span>
        <LangSwitcher />
      </div>
      <div className="rounded-[25px] bg-blue px-[23px] pt-[21px] pb-[29px] mb-[12px]">
        <p className="text-[12px] text-white/70 mb-[8px]">Selected currency</p>
        <p className="text-[26px] text-white font-manrope-bold">
          Brazilian real (R$)
        </p>
      </div>
      <p className="text-[18px] font-manrope-bold mb-[9px]">Change currency</p>
      <div className="grid grid-cols-1 gap-[13px] mb-[20px]">
        {CURRENCIES.map(({ symbol, label }, idx) => (
          <div
            key={idx}
            className="rounded-[18px] bg-white h-[47px] px-[19px] flex items-center gap-[12px]"
          >
            <span className="text-[14px]">{symbol}</span>
            <span className="text-[12px] text-gray">{label}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col flex-grow justify-end">
        <Button>Save</Button>
      </div>
    </Popup>
  );
}
