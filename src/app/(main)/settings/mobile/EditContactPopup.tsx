import IconButton from '@/components/IconButton';
import Popup, { PopupProps } from '@/components/Popup';
import TextField from '@/components/TextField';
import Button from '@/components/Button';
import LangSwitcher from '@/parts/LangSwitcher';

export default function EditContactPopup({ open, onClose }: PopupProps) {
  return (
    <Popup
      open={open}
      onClose={onClose}
      className="h-[100vh] bg-gray-pale px-[28px] pt-[20px] pb-[34px] flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-[30px]">
          <IconButton icon="backward" color="secondary" onClick={onClose} />
          <span className="text-[14px]">My contact info</span>
          <LangSwitcher />
        </div>
        <div className="grid grid-cols-1 gap-[15px] mb-[20px]">
          <TextField
            color="secondary"
            placeholder="Full name"
            value="Elwin Sharvill"
          />
          <TextField
            color="secondary"
            placeholder="Username"
            value="@sharvillelwin"
          />
          <TextField
            color="secondary"
            placeholder="Email"
            value="elwinsharwill@mail.com"
          />
          <TextField
            color="secondary"
            placeholder="Phone"
            value="+1 264 2910 3002"
          />
        </div>
      </div>

      <Button onClick={onClose}>Save changes</Button>
    </Popup>
  );
}
