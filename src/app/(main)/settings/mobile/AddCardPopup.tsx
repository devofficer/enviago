import IconButton from '@/components/IconButton';
import Popup, { PopupProps } from '@/components/Popup';
import TextField from '@/components/TextField';
import Select from '@/components/Select';
import Button from '@/components/Button';
import LangSwitcher from '@/parts/LangSwitcher';

import MasterCardSvg from '@/assets/master-card.svg';

export default function AddCardPopup({ open, onClose }: PopupProps) {
  return (
    <Popup
      open={open}
      onClose={onClose}
      className="h-[100vh] bg-gray-pale pt-[20px] flex flex-col justify-between"
    >
      <div className="flex items-center justify-between px-[28px] mb-[22px]">
        <IconButton icon="backward" color="secondary" onClick={onClose} />
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
        <Button className="col-span-2" onClick={onClose}>
          Save
        </Button>
      </div>
    </Popup>
  );
}
