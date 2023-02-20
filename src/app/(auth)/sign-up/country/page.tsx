import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import Select from '@/components/Select';

export default function Country() {
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
          Where are you from?
        </p>
        <p className="font-manrope-semibold text-[.875rem] text-center text-gray-dark leading-[1.125rem] mb-[2.25rem]">
          Please select your country of residence.
        </p>
        <Select
          items={['United States']}
          placeholder="Select country"
          className="mb-[1.125rem]"
        />
      </div>
      <Button className="bg-purple text-white mb-[0.5rem]">Next</Button>
    </div>
  );
}
