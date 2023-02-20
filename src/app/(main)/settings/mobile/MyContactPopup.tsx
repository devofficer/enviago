import IconButton from '@/components/IconButton';
import Popup, { PopupProps } from '@/components/Popup';
import TextField from '@/components/TextField';
import Button from '@/components/Button';
import LangSwitcher from '@/parts/LangSwitcher';

import SearchSvg from '@/assets/icons/search.svg';
import TOP_PEOPLE from '@/mock/top-people';
import Image from 'next/image';

export default function MyContactPopup({ open, onClose }: PopupProps) {
  return (
    <Popup
      open={open}
      onClose={onClose}
      className="h-[100vh] bg-gray-pale pt-[20px] flex flex-col justify-between"
    >
      <div className="flex items-center justify-between px-[28px] mb-[22px]">
        <IconButton icon="backward" color="secondary" onClick={onClose} />
        <span className="text-[14px]">My Contacts</span>
        <LangSwitcher />
      </div>
      <div className="flex flex-col flex-grow bg-white rounded-t-[30px] px-[22px] pt-[30px] pb-[54px]">
        <TextField
          placeholder="Name, @username, email, phone"
          size="small"
          startAdornment={<SearchSvg />}
          className="mb-[18px]"
        />
        <div className="text-[18px] font-manrope-bold leading-[24px] mb-[9px]">
          Contacts using Enviago
        </div>
        <div className="grid grid-cols-1 gap-[9px] mb-[20px]">
          {TOP_PEOPLE.map(({ username, id }, idx) => (
            <div
              key={idx}
              className="flex items-center px-[16px] py-[19px] bg-gray-pale rounded-[18px]"
            >
              <Image
                src="/images/avatars/female.png"
                width={101}
                height={100}
                alt="avatar"
                className="mr-[14px] w-[39px] h-[39px]"
              />
              <div>
                <div className="text-[.875rem] leading-[20px] text-dark mb-[4px]">
                  {username}
                </div>
                <div className="text-[12px] leading-[16px] text-gray">{id}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-grow flex flex-col justify-end">
          <Button variant="outlined" onClick={onClose}>
            Invite more friends to Enviago
          </Button>
        </div>
      </div>
    </Popup>
  );
}
