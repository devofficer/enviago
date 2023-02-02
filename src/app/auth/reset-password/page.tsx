import ForwardButton from '@/components/ForwardButton';
import TextField from '@/components/TextField';

export default function ResetPassword() {
  return (
    <div className="flex flex-col items-center justify-center xl:px-[10.25rem] px-10 w-full h-full">
      <p className="font-manrope-bold text-[1.375rem] text-black mb-1">
        Forgot your details?
      </p>
      <p className="font-manrope-semibold text-gray-dark text-[0.875rem] mb-[1.125rem]">
        We’ll send reset link to your email.
      </p>
      <TextField
        placeholder="Email Address"
        className="mb-4"
        value="leonardoolivera@gmail.com"
      />
      <ForwardButton>Continue</ForwardButton>
    </div>
  );
}
