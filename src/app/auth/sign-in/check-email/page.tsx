import Button from '@/components/Button';
import Icon from '@/components/Icon';
import IconButton from '@/components/IconButton';

export default function CheckEmail() {
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
        <Icon type="envelope" className='mb-[1.125rem] mx-auto ' />
        <p className="font-manrope-bold text-[1.375rem] text-black mb-[0.5rem]">
          Check your email
        </p>
        <p className="font-manrope-semibold text-gray-dark text-[.875rem] text-center leading-[1.125rem] mb-[1.125rem]">
          Password reset link has just been sent to
          <br />
          <span className='text-blue'>leonardoolivera@gmail.com</span>
        </p>
      </div>
      <Button className='bg-purple text-white'>Log in</Button>
    </div>
  );
}
