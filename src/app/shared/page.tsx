import LogoSvg from '@/assets/icons/logo.svg';
import Button from '@/components/Button';
import Select from '@/components/Select';
import LangSwitcher from '@/parts/LangSwitcher';
import Image from 'next/image';

export default function SharedProfile() {
  return (
    <div className="bg-gray-pale w-full">
      <div className="container pt-[37px] pb-[55px]">
        <div className="flex items-center justify-between mb-[33px]">
          <LogoSvg className="fill-blue" />
          <div className="flex items-center">
            <LangSwitcher className="mr-[30px]" />
            <Button
              variant="outlined"
              color="info"
              className="mr-[15px] min-w-[135px]"
            >
              Log in
            </Button>
            <Button color="info" className="min-w-[145px]">
              Sign up
            </Button>
          </div>
        </div>
        <div className="bg-white rounded-[30px]">
          <div className="bg-orange h-[306px] pt-[145px] text-center rounded-t-[30px] rounded-b-[20px] mb-[86px]">
            <div className="text-[22px] text-white font-manrope-bold mb-[7px]">
              Indira Shree
            </div>
            <div className="text-[18px] text-white/80 font-manrope-bold mb-[38px]">
              @indirashree
            </div>
            <Image
              src="/images/avatars/user.png"
              width={104}
              height={104}
              alt="user"
              className="mx-auto"
            />
          </div>
          <div className="grid grid-cols-3">
            <div className="col-start-2 text-center">
              <p className="text-gray-dark text-[14px] mb-[23px]">
                A writer, digital marketing pioneer, and Wall Street Journal
                best-selling author who inspires and empowers people.
              </p>
              <Select
                items={['$20']}
                placeholder="Amount"
                value="$20"
                className="mb-[11px]"
              />
              <Button className="mb-[55px]">Send money</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}