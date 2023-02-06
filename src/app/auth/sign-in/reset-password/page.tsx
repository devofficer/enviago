import ForwardButton from '@/components/ForwardButton';
import IconButton from '@/components/IconButton';
import TextField from '@/components/TextField';

export default function ResetPassword() {
  return (
    <div className="relative flex flex-col items-center lg:justify-center justify-between xl:px-[10.25rem] px-10 pt-[120px] pb-[42px] lg:py-0 w-full h-full">
      <IconButton
        className="xl:top-[4rem] xl:left-[4rem] top-[2rem] left-[2rem] absolute"
        icon="backward"
      />
      <span className="absolute top-[2.625rem] lg:hidden text-[.875rem] font-manrope-semibold">
        Reset Password
      </span>
      <div className='w-full text-center'>
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
      </div>
      <ForwardButton>Continue</ForwardButton>
    </div>
  );
}
