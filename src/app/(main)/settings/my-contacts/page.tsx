import Button from '@/components/Button';
import TextField from '@/components/TextField';

import SearchSvg from '@/assets/icons/search.svg';
import Image from 'next/image';

export default function MyContacts() {
  return (
    <>
      <div className="bg-white rounded-[18px] px-[45px] pt-[34px] pb-[32px] mb-[23px]">
        <TextField
          placeholder="Name, @username, email, phone"
          size="small"
          startAdornment={<SearchSvg />}
          className="mb-[20px]"
        />
        <div className="text-[18px] font-manrope-bold leading-[24px] mb-[9px]">
          Contacts
        </div>
        <div className="grid grid-cols-1 gap-[9px]">
          <div className="flex items-center px-[16px] py-[19px] bg-gray-pale rounded-[18px]">
            <Image
              src="/images/avatars/female.png"
              width={101}
              height={100}
              alt="avatar"
              className="mr-[14px] w-[39px] h-[39px]"
            />
            <div>
              <div className="text-[.875rem] leading-[20px] text-dark mb-[4px]">
                Gibby Radki
              </div>
              <div className="text-[12px] leading-[16px] text-gray">
                @gibbyradki
              </div>
            </div>
          </div>
          <div className="flex items-center px-[16px] py-[19px] bg-gray-pale rounded-[18px]">
            <Image
              src="/images/avatars/female.png"
              width={101}
              height={100}
              alt="avatar"
              className="mr-[14px] w-[39px] h-[39px]"
            />
            <div>
              <div className="text-[.875rem] leading-[20px] text-dark mb-[4px]">
                Sofietje Boksem
              </div>
              <div className="text-[12px] leading-[16px] text-gray">
                @gibbyradki
              </div>
            </div>
          </div>
          <div className="flex items-center px-[16px] py-[19px] bg-gray-pale rounded-[18px]">
            <Image
              src="/images/avatars/female.png"
              width={101}
              height={100}
              alt="avatar"
              className="mr-[14px] w-[39px] h-[39px]"
            />
            <div>
              <div className="text-[.875rem] leading-[20px] text-dark mb-[4px]">
                Saga Lindén
              </div>
              <div className="text-[12px] leading-[16px] text-gray">
                @gibbyradki
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button variant="outlined">Invite more friends to Enviago</Button>
    </>
  );
}
