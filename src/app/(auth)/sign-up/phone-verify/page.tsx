import Button from '@/components/Button';
import Icon from '@/components/Icon';
import IconButton from '@/components/IconButton';
import TextField from '@/components/TextField';

export default function Phone() {
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
        <Icon type="phone" className="mb-[1rem] mx-auto" />
        <p className="font-manrope-bold text-[1.375rem] text-black mb-[.75rem] leading-[1.45]">
          Enter the code
        </p>
        <p className="font-manrope-semibold text-[.875rem] text-center text-gray-dark leading-[1.125rem] mb-[1.5rem] px-[1.375rem]">
          We sent it to <span className="text-blue">+1 264 2910 3002</span>
        </p>
        <div className="grid grid-cols-4 gap-[.375rem] mb-[1rem]">
          <TextField value="4" className="text-center" />
          <TextField value="2" className="text-center" />
          <TextField value="6" className="text-center" />
          <TextField value="7" className="text-center" />
        </div>
        <p className="font-manrope-semibold text-[.75rem] text-center text-gray-dark leading-[1.5rem] mb-[1.125rem] px-[1.375rem]">
          Didn’ t get a code? <span className="text-blue">Click to resend</span>
        </p>
      </div>
      <Button className="bg-purple text-white mb-[0.5rem]">Verify</Button>
    </div>
  );
}
