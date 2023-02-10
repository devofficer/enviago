import Wallet from '@/components/Wallet';
import RequestSvg from '@/assets/request.svg';
import ShareSvg from '@/assets/share.svg';
import SendSvg from '@/assets/send.svg';
import CashSvg from '@/assets/cash.svg';
import ContactSvg from '@/assets/contact.svg';
import ProfileSvg from '@/assets/profile.svg';
import BankSvg from '@/assets/bank.svg';

export default function HomeAfterSignup() {
  return (
    <div>
      <div className="flex flex-wrap justify-center lg:justify-start">
        <Wallet className="lg:mr-[16px] mb-[16px]" />
        <div className="hidden lg:flex flex-col w-[121px] h-[106px] items-center justify-center bg-white rounded-[18px] mr-[14px] mb-[16px]">
          <RequestSvg className="mb-[9px]" />
          <span className="text-gray text-[14px]">Request</span>
        </div>
        <div className="hidden lg:flex flex-col w-[121px] h-[106px] items-center justify-center bg-white rounded-[18px] mr-[14px] mb-[16px]">
          <ShareSvg className="mb-[9px]" />
          <span className="text-gray text-[14px]">Share URL</span>
        </div>
        <div className="hidden lg:flex flex-col w-[121px] h-[106px] items-center justify-center bg-white rounded-[18px] mr-[14px] mb-[16px]">
          <SendSvg className="mb-[9px]" />
          <span className="text-gray text-[14px]">Send</span>
        </div>
      </div>
      <h1 className="font-manrope-bold text-[1.125rem] leading-[24px] text-black mb-[9px] text-center lg:text-start">
        Welcome to Enviago
      </h1>
      <p className="text-gray text-[.875rem] leading-[18px] mb-[17px] text-center lg:text-start">
        What would you like to do first?
      </p>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
        <div className="bg-white rounded-[18px] px-[16px] py-[19px] flex items-center">
          <div className="flex items-center justify-center w-[39px] h-[39px] bg-purple rounded-full mr-[14px]">
            <CashSvg />
          </div>
          <div>
            <h2 className="text-dark text-[14px] leading-[20px] mb-[4px]">
              Make your first payment
            </h2>
            <p className="text-gray text-[12px]">
              Pay someone or request money
            </p>
          </div>
        </div>
        <div className="bg-white rounded-[18px] px-[16px] py-[19px] flex items-center">
          <div className="flex items-center justify-center w-[39px] h-[39px] bg-green rounded-full mr-[14px]">
            <ContactSvg />
          </div>
          <div>
            <h2 className="text-dark text-[14px] leading-[20px] mb-[4px]">
              Find people to pay
            </h2>
            <p className="text-gray text-[12px]">Sync your phone contacts</p>
          </div>
        </div>
        <div className="bg-white rounded-[18px] px-[16px] py-[19px] flex items-center">
          <div className="flex items-center justify-center w-[39px] h-[39px] bg-blue rounded-full mr-[14px]">
            <ProfileSvg />
          </div>
          <div>
            <h2 className="text-dark text-[14px] leading-[20px] mb-[4px]">
              Personalize your profile
            </h2>
            <p className="text-gray text-[12px]">
              Edit your Enviago link, profile, and more
            </p>
          </div>
        </div>
        <div className="bg-white rounded-[18px] px-[16px] py-[19px] flex items-center">
          <div className="flex items-center justify-center w-[39px] h-[39px] bg-orange rounded-full mr-[14px]">
            <BankSvg />
          </div>
          <div>
            <h2 className="text-dark text-[14px] leading-[20px] mb-[4px]">
              Link your bank account
            </h2>
            <p className="text-gray text-[12px]">
              Connect with your bank account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
