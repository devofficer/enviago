import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import IconButton from '@/components/IconButton';
import TextField from '@/components/TextField';
import Image from 'next/image';

export default function Phone() {
  return (
    <div className="relative flex flex-col items-center lg:justify-center justify-between xl:px-[10.25rem] px-10 pt-[120px] pb-[42px] lg:py-0 w-full h-full overflow-auto overflow-auto">
      <IconButton
        className="xl:top-[4rem] xl:left-[4rem] top-[2rem] left-[2rem] absolute lg:hidden"
        icon="backward"
      />
      <span className="absolute top-[42px] lg:hidden text-[.875rem] font-manrope-semibold">
        Sign up
      </span>
      <div className="w-full text-center">
        <p className="font-manrope-bold text-[1.375rem] text-black mb-[.75rem] leading-[1.45]">
          Let’s set up your account
        </p>
        <p className="font-manrope-semibold text-[.875rem] text-center text-gray-dark leading-[1.125rem] mb-[1.813rem] px-[1.375rem]">
          We need your legal name to make sure it’s really you.
        </p>
        <div className="relative mb-[1.125rem] w-[100px] h-[100px] mx-auto">
          <Image src="/images/avatars/user.svg" width={100} height={100} alt="user" className="rounded-full" />
          <IconButton variant='custom' className="absolute bottom-[-4px] right-[-4px]">
            <Image src="/images/icons/pen.svg" width={36} height={36} alt="pen" className="w-[36px] h-[36px] rounded-full" />
          </IconButton>
        </div>
        <TextField placeholder="Full legal name" className="mb-[0.5rem]" />
        <TextField placeholder="Username" className="mb-[0.5rem]" />
        <TextField placeholder="Email" className="mb-[1rem]" />
        <Checkbox className="mb-[1.875rem]">
          <span className="font-manrope-semibold text-[.75rem] text-navy leading-[.875rem]">
            I’m 18 years old and agree to the{' '}
            <span className="text-blue">E-Sign Disclosure and Consent</span> to
            receive all communications electronically.
          </span>
        </Checkbox>
      </div>

      <Button className="bg-purple text-white">Complete sign up</Button>
    </div>
  );
}
