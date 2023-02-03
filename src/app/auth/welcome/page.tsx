import OutlinedButton from '@/components/OutlinedButton';
import Divider from '@/components/Divider';
import LinkButton from '@/components/LinkButton';
import ContainedButton from '@/components/ContainedButton';

export default function Welcome() {
  return (
    <div className="relative flex flex-col items-center justify-center xl:px-[10.25rem] px-10 w-full h-full">
      <p className="font-manrope-bold text-[1.375rem] text-black mb-1">
        Welcome&nbsp;👋
      </p>
      <p className="font-manrope-semibold text-gray-dark text-[0.875rem] mb-[1.125rem]">
        Sign up or log in to get started!
      </p>
      <ContainedButton className="mb-[1.875rem]">Sign up</ContainedButton>
      <OutlinedButton className="mb-[1.5rem]">
        Log in
      </OutlinedButton>
      <Divider className="mb-[1.5rem]">or</Divider>
      <LinkButton path="/auth/reset-password">Reset my password</LinkButton>
    </div>
  );
}
