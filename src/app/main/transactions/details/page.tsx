import Divider from '@/components/Divider';
import IconButton from '@/components/IconButton';
import Image from 'next/image';
import TransferSvg from '@/assets/transfer.svg';

export default function TransactionDetails() {
  return (
    <div>
      <IconButton icon="backward" color="secondary" className="mb-[30px]" />
      <div className="grid grid-cols-2 gap-[43px]">
        <div className="bg-white rounded-[15px] pt-[30px] pb-[22px] px-[54px]">
          <div className="pt-[18px] pb-[16px] flex flex-col items-center justify-center bg-gray bg-opacity-[18%] rounded-[15px] mb-[19px]">
            <span className="text-green font-manrope-bold text-[24px] leading-[32px] mb-4">
              +$500
            </span>
            <span className="text-gray text-[12px] leading-[16px]">
              Chilean peso
            </span>
          </div>
          <div className="text-gray-steel text-[14px] leading-[18px] mb-[12px]">
            From
          </div>
          <div className="flex items-center mb-[12px]">
            <Image
              src="/images/avatars/female.png"
              width={101}
              height={100}
              alt="avatar"
              className="rounded-full w-[48px] h-[48px] mr-[15px]"
            />
            <span className="text-[14px] text-dark leading-[20px]">
              Quinten Kortum
            </span>
          </div>
          <Divider color="secondary" className="mb-[18px]" />
          <div className="flex items-center justify-between text-[13px] leading-[18px] mb-[25px]">
            <span className="text-black">Transaction Date:</span>
            <span className="text-gray-dark">Jan 14, 2023</span>
          </div>
          <Divider color="secondary" className="mb-[18px]" />
          <div className="flex items-center justify-between text-[13px] leading-[18px]">
            <span className="text-black">Status:</span>
            <span className="text-green">Completed</span>
          </div>
        </div>
        <div>
          <div className="text-[18px] leading-[24px] font-manrope-bold mb-[12px]">
            3 comments
          </div>
          <div className="mb-[13px]">
            <div className="px-[16px] py-[18px] flex items-center bg-white rounded-[15px] mb-[12px]">
              <Image
                src="/images/avatars/female.png"
                width={101}
                height={100}
                alt="avatar"
                className="w-[40px] h-[40px] mr-[12px]"
              />
              <div>
                <div className="text-[14px] text-black">
                  <span className="font-manrope-bold mr-[12px]">Meng Ru</span>
                  <span className="font-manrope-medium">1h</span>
                </div>
                <span className="text-gray-dark text-[13px] leading-[18px]">
                  What is this for?
                </span>
              </div>
            </div>
            <div className="px-[16px] py-[18px] flex items-center bg-white rounded-[15px] mb-[12px]">
              <Image
                src="/images/avatars/female.png"
                width={101}
                height={100}
                alt="avatar"
                className="w-[40px] h-[40px] mr-[12px]"
              />
              <div>
                <div className="text-[14px] text-black">
                  <span className="font-manrope-bold mr-[12px]">
                    Quinten Kortum
                  </span>
                  <span className="font-manrope-medium">1h</span>
                </div>
                <span className="text-gray-dark text-[13px] leading-[18px]">
                  <span className="text-blue">@mengru</span> it’s for Anne’s
                  birthday!
                </span>
              </div>
            </div>
            <div className="px-[16px] py-[18px] flex items-center bg-white rounded-[15px] mb-[12px]">
              <Image
                src="/images/avatars/female.png"
                width={101}
                height={100}
                alt="avatar"
                className="w-[40px] h-[40px] mr-[12px]"
              />
              <div>
                <div className="text-[14px] text-black">
                  <span className="font-manrope-bold mr-[12px]">Meng Ru</span>
                  <span className="font-manrope-medium">1h</span>
                </div>
                <span className="text-gray-dark text-[13px] leading-[18px]">
                  Oh okay, paid! 😊
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[100px] px-[20px] py-[16px] flex justify-between items-center">
            <span className="text-gray-steel text-[14px] leading-[18px]">
              Comment…
            </span>
            <TransferSvg />
          </div>
        </div>
      </div>
    </div>
  );
}
