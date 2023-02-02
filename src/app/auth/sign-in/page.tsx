import OutlinedButton from '@/components/OutlinedButton';
import Divider from '@/components/Divider';
import Button from '@/components/Button';
import TextField from '@/components/TextField';
import Icon from '@/components/Icon';
import LinkButton from '@/components/LinkButton';

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center xl:px-[10.25rem] px-10 w-full h-full">
      <p className="font-manrope-bold text-[1.375rem] text-black mb-1">
        Welcome&nbsp;👋
      </p>
      <p className="font-manrope-semibold text-gray-dark text-[0.875rem] mb-[1.125rem]">
        Enter your details to sign in.
      </p>
      <TextField placeholder="Username, phone, or email" className="mb-4" />
      <TextField placeholder="Password" className="mb-4" />
      <Button className="bg-purple text-white mb-[1.875rem]">Log in</Button>
      <Divider className="mb-[1.5rem]">or</Divider>
      <OutlinedButton className="mb-[1.5rem]">
        <Icon className="mr-[1.313rem]" type="google" />
        Continue with Google
      </OutlinedButton>
      <LinkButton path="/auth/reset-password">
        Reset my password
      </LinkButton>
    </div>
  );
}
