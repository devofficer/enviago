import Button from '@/components/Button';
import Icon from '@/components/Icon';

export default function CheckEmail() {
  return (
    <div className="relative flex flex-col items-center justify-center xl:px-[10.25rem] px-10 w-full h-full">
      <Icon type="envelope" className='mb-[1.125rem] '/>
      <p className="font-manrope-bold text-[1.375rem] text-black mb-[0.5rem]">
        Check your email
      </p>
      <p className="font-manrope-semibold text-gray-dark text-[.875rem] text-center leading-[1.125rem] mb-[1.125rem]">
        Password reset link has just been sent to
        <br />
        <span className='text-blue'>leonardoolivera@gmail.com</span>
      </p>
      <Button className='bg-purple text-white'>Log in</Button>
    </div>
  );
}
