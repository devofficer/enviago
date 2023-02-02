import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Icon from "@/components/Icon";
import IconButton from "@/components/IconButton";
import TextField from "@/components/TextField";

export default function Phone() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full xl:px-[10rem] px-10">
      <IconButton className="xl:top-[4rem] xl:left-[4rem] top-[2rem] left-[2rem] absolute" icon="backward" />
      <p className="font-manrope-bold text-[1.375rem] text-black mb-[.75rem] leading-[1.45]">
        Let’s set up your account
      </p>
      <p className="font-manrope-semibold text-[.875rem] text-center text-gray-dark leading-[1.125rem] mb-[1.813rem] px-[1.375rem]">
        We need your legal name to make sure it’s really you.
      </p>
      <div className="w-[100px] h-[100px] rounded-full bg-[url(/images/avatars/user.svg)] relative mb-[1.125rem]">
        <div className="w-[36px] h-[36px] rounded-full bg-blue absolute bottom-0 right-0 bg-[url(/images/icons/pen.svg)] bg-cover" />
      </div>
      <TextField placeholder="Full legal name" className="mb-[0.5rem]" />
      <TextField placeholder="Username" className="mb-[0.5rem]" />
      <TextField placeholder="Email" className="mb-[1rem]" />
      <Checkbox className="mb-[1.875rem]">
        <span className="font-manrope-semibold text-[.75rem] text-navy leading-[.875rem]">
          I’m 18 years old and agree to the <span className="text-blue">E-Sign Disclosure and Consent</span> to receive all communications electronically.
        </span>
      </Checkbox>
      <Button className="bg-purple text-white">
        Complete sign up
      </Button>
    </div>
  )
}