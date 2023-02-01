import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import OutlinedButton from "@/components/OutlinedButton";
import TextField from "@/components/TextField";

export default function Phone() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full xl:px-[10rem] px-10">
      <IconButton className="xl:top-[4rem] xl:left-[4rem] top-[2rem] left-[2rem] absolute" icon="backward" />
      <p className="font-manrope-bold text-[1.375rem] text-black mb-[.75rem] leading-[1.45]">
        Enter your phone number
      </p>
      <p className="font-manrope-semibold text-[.875rem] text-center text-gray-dark leading-[1.125rem] mb-[1.125rem] px-[1.375rem]">
        We’ll text you  a code so we can confirm that it’s you
      </p>
      <TextField placeholder="Phone number" className="mb-[.625rem]" />
      <p className="font-manrope-semibold text-[.75rem] text-navy leading-[.875rem] mb-[1.875rem]">
        By tapping one of the buttons, you confirm that you are authorized to use the phone number entered 
        and agree to receive SMS texts verifying your identity and as otherwise permitted by  
        <span className="text-blue">&nbsp;Enviago User Agreement</span> and <span className="text-blue">Privacy Policy</span>. Carrier fees may apply.
      </p>
      <Button className="bg-purple text-white mb-[0.5rem]">
        Text me code
      </Button>
      <OutlinedButton className="border-purple text-purple font-manrope-extrabold">
        Send via WhatsApp
      </OutlinedButton>
    </div>
  )
}