import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import TextField from '@/components/TextField';

export default function ConfirmPassword() {
  return (
    <div className="relative flex flex-col items-center lg:justify-center justify-start xl:px-[10.25rem] px-10 pt-[120px] pb-[42px] lg:py-0 w-full h-full">
      <IconButton
        className="xl:top-[4rem] xl:left-[4rem] top-[2rem] left-[2rem] absolute"
        icon="backward"
      />
      <span className="absolute top-[2.625rem] lg:hidden text-[.875rem] font-manrope-semibold">
        Reset Password
      </span>
      <p className="font-manrope-bold text-[1.375rem] text-black mb-[2.25rem]">
        Enter your new password
      </p>
      <TextField placeholder='Password' password className='mb-[1rem]' />
      <TextField placeholder='Confirm Password' password className='mb-[1rem]' />
      <Button className='bg-purple text-white'>Set</Button>
    </div>
  );
}
