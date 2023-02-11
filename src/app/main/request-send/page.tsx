import Icon from '@/components/Icon';
import TextField from '@/components/TextField';
import AttachmentSvg from '@/assets/attachment.svg';
import Image from 'next/image';
import Button from '@/components/Button';

export default function RequestOrSend() {
  return (
    <div>
      <ul className="flex flex-wrap text-[.875rem] font-manrope-bold text-center text-gray mb-[28px]">
        <li>
          <a
            href="#"
            className="inline-block px-[42px] py-[8px] text-white bg-blue rounded-[39px] active"
            aria-current="page"
          >
            Request
          </a>
        </li>
        <li>
          <a
            href="#"
            className="inline-block px-[42px] py-[8px] rounded-[39px] hover:text-gray-dark hover:bg-gray-light"
          >
            Send
          </a>
        </li>
      </ul>
      <div className="bg-white px-[45px] pt-[34px] pb-[50px] rounded-[18px] mb-[28px]">
        <TextField
          placeholder="Name, @username, email, phone"
          size="small"
          startAdornment={<Icon type="pen" />}
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
      <Button>Continue</Button>
    </div>
  );
}
