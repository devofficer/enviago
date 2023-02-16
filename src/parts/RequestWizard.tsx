import Popup from '@/components/Popup';
import Tab from '@/components/Tab';
import { useState } from 'react';
import SearchSvg from '@/assets/icons/search.svg';
import TextField from '@/components/TextField';
import AttachmentSvg from '@/assets/attachment.svg';
import CloseSvg from '@/assets/icons/close.svg';
import Image from 'next/image';
import IconButton from '@/components/IconButton';
import { WizardComponentProps } from '@/components/Wizard';
import TOP_PEOPLE from '@/mock/top-people';

export default function RequestPopup({
  data,
  goForward,
  onClose,
}: WizardComponentProps) {
  const [tab, setTab] = useState('Request');

  return (
    <Popup open={true} onClose={onClose} className="mt-[10vh] h-[90vh]">
      <Tab
        active={tab}
        tabs={['Request', 'Send']}
        onSelect={(tabId) => setTab(tabId)}
        className="mb-[13px]"
      />
      <TextField
        placeholder="Name, @username, email, phone"
        size="small"
        startAdornment={<SearchSvg />}
        className="mb-[21px]"
      />
      <div className="flex items-center mb-[21px]">
        <AttachmentSvg className="mr-[14px]" />
        <div>
          <div className="mb-[5px] text-[.875rem] font-manrope-medium text-black">
            Share your <span className="text-blue">Enviago.com</span> link
          </div>
          <div className="text-gray text-[12px] leading-[16px]">
            Text, post, or share your link to get paid
          </div>
        </div>
      </div>
      <h2 className="text-[18px] font-manrope-bold leading-[24px] text-black mb-[9px]">
        Top people
      </h2>
      <div className="grid grid-cols-1 gap-[9px] mb-[12px]">
        {TOP_PEOPLE.map(({ username, id }, idx) => (
          <div
            key={idx}
            onClick={() => goForward(data)}
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
      <IconButton variant="custom" onClick={onClose}>
        <CloseSvg />
      </IconButton>
    </Popup>
  );
}
