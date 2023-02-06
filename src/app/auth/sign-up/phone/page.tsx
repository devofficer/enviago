import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import OutlinedButton from '@/components/OutlinedButton';
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
        <p className="font-manrope-bold text-[1.375rem] text-black mb-[.75rem] leading-[1.45]">
          Enter your phone number
        </p>
        <p className="font-manrope-semibold text-[.875rem] text-center text-gray-dark leading-[1.125rem] mb-[1.125rem] px-[1.375rem]">
          We’ll text you a code so we can confirm that it’s you
        </p>
        <TextField placeholder="Phone number" className="mb-[.625rem]" />
        <p className="font-manrope-semibold text-[.75rem] text-navy leading-[.875rem] mb-[1.875rem] text-left">
          By tapping one of the buttons, you confirm that you are authorized to
          use the phone number entered and agree to receive SMS texts verifying
          your identity and as otherwise permitted by
          <span className="text-blue">
            &nbsp;Enviago User Agreement
          </span> and <span className="text-blue">Privacy Policy</span>. Carrier
          fees may apply.
        </p>
      </div>
      <div className="w-full">
        <Button className="bg-purple text-white mb-[0.5rem]">
          Text me code
        </Button>
        <OutlinedButton className="border-purple text-purple font-manrope-extrabold">
          Send via WhatsApp
        </OutlinedButton>
      </div>
    </div>
  );
}
