import OutlinedButton from '@/components/OutlinedButton';
import Divider from '@/components/Divider';
import ForwardButton from '@/components/ForwardButton';
import TextField from '@/components/TextField';
import Image from 'next/image';

export default function SignUp() {
  return (
    <div className="flex flex-col items-center w-full">
      <p className="font-manrope-bold text-[1.375rem] text-black mb-1">
        Welcome&nbsp;👋
      </p>
      <p className="font-manrope-semibold text-gray-dark text-[0.875rem] mb-[1.125rem]">
        Start with <span className="text-blue">Enviago.com</span> today!
      </p>
      <TextField placeholder="Email" className="mb-4" />
      <TextField placeholder="Password" className="mb-4" />
      <TextField placeholder="Confirm Password" className="mb-4" />
      <ForwardButton className="mb-[1.875rem]">Continue</ForwardButton>
      <Divider className="mb-[1.5rem]">or</Divider>
      <OutlinedButton>
        <Image className="mr-[1.313rem]" src="/images/icons/google.svg" width={18} height={18} alt="google" />
        Continue with Google
      </OutlinedButton>
    </div>
  );
}
