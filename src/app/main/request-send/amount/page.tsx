import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import TextField from '@/components/TextField';

export default function Amount() {
  return (
    <>
      <div className="bg-white rounded-[18px] px-[45px] pt-[30px] pb-[24px] mb-[28px]">
        <div className="flex items-center mb-[17px]">
          <IconButton
            icon="backward"
            variant="custom"
            className="w-[20px] h-auto mr-[22px]"
          />
          <span className="text-[18px] leading-[24px] font-manrope-bold mr-[22px]">
            Request money from
          </span>
          <Avatar
            editable={false}
            url="/images/avatars/female.png"
            className="w-[39px] h-auto mr-[15px]"
          />
          <span className="text-[14px] font-manrope-bold">Gabie Sheber</span>
        </div>
        <div className="flex gap-[10px] font-manrope-bold text-dark mb-[22px]">
          <span className="text-[18px] text-dark/50">$</span>
          <span className="text-[48px] leading-[40px]">2,600</span>
          <span className="text-[14px]">CLP</span>
        </div>
        <TextField placeholder="Message" value="For rent" />
      </div>
      <Button>Continue</Button>
    </>
  );
}
