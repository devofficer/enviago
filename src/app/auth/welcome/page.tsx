import OutlinedButton from '@/components/OutlinedButton';
import Divider from '@/components/Divider';
import ContainedButton from '@/components/ContainedButton';
import Image from 'next/image';
import Icon from '@/components/Icon';
import IconButton from '@/components/IconButton';

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center xl:px-[10.25rem] px-10 pt-[315px] w-full h-full">
      <div className="bg-blue w-full h-[315px] absolute top-0 flex flex-col pt-[73px] rounded-b-[1rem] bg-[url(/images/auth/circle.svg)] bg-no-repeat bg-[right_-32px_bottom_3.2px]">
        <Icon type="logo" className="self-center justify-self-center" />
        <Image
          className="self-end"
          src="/images/auth/group1.png"
          width={254}
          height={136}
          alt="group"
        />
        <Image
          className="-mt-[1rem]"
          src="/images/auth/group2.png"
          width={254}
          height={136}
          alt="group"
        />
      </div>
      <p className="font-manrope-bold text-[1.375rem] text-black mb-1">
        Welcome&nbsp;👋
      </p>
      <p className="font-manrope-semibold text-gray-dark text-[0.875rem] mb-[1.125rem]">
        Sign up or log in to get started!
      </p>
      <ContainedButton className="mb-[.625rem]">Sign up</ContainedButton>
      <OutlinedButton className="mb-[1.5rem]">Log in</OutlinedButton>
      <Divider className="mb-[1.375rem]">or</Divider>
      <div className="flex">
        <IconButton icon="google" className="mr-[16px]" variant="circle" />
        <IconButton icon="phone" variant="circle" />
      </div>
    </div>
  );
}
