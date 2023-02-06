import OutlinedButton from '@/components/OutlinedButton';
import Divider from '@/components/Divider';
import ForwardButton from '@/components/ForwardButton';
import TextField from '@/components/TextField';
import Icon from '@/components/Icon';
import IconButton from '@/components/IconButton';
import LinkButton from '@/components/LinkButton';

export default function SignUp() {
  return (
    <div className="relative flex flex-col items-center lg:justify-center justify-between xl:px-[10.25rem] px-10 pt-[120px] pb-[42px] lg:py-0 w-full h-full overflow-auto">
      <IconButton
        className="xl:top-[4rem] xl:left-[4rem] top-[2rem] left-[2rem] absolute lg:hidden"
        icon="backward"
      />
      <span className="absolute top-[42px] lg:hidden text-[.875rem] font-manrope-semibold">
        Sign up
      </span>
      <div className="w-full text-center">
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
        <OutlinedButton variant="secondary" className="mb-[1.5rem]">
          <Icon className="mr-[1.313rem]" type="google" />
          Continue with Google
        </OutlinedButton>
      </div>
      <p className="text-[.75rem] font-manrope text-navy leading-[1.5rem]">
        Already have an account?&nbsp;
        <LinkButton path="/auth/sign-in">Sign in</LinkButton>
      </p>
    </div>
  );
}
