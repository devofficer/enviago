import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import Select from "@/components/Select";

export default function Country() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full xl:px-[10rem] px-10">
      <IconButton className="xl:top-[4rem] xl:left-[4rem] top-[2rem] left-[2rem] absolute" icon="backward" />
      <p className="font-manrope-bold text-[1.375rem] text-black mb-[.75rem] leading-[1.45]">
        Where are you from?
      </p>
      <p className="font-manrope-semibold text-[.875rem] text-center text-gray-dark leading-[1.125rem] mb-[2.25rem] px-[1.375rem]">
        Please select your country of residence.
      </p>
      <Select options={[]} placeholder="Select country" className="mb-[1.125rem]" />
      <Button className="bg-purple text-white mb-[0.5rem]">
        Next
      </Button>
    </div>
  )
}