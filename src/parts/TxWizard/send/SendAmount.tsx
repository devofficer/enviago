import IconButton from '@/components/IconButton';
import BackArrowSvg from '@/assets/icons/back-arrow.svg';
import { WizardComponent } from '@/components/Wizard';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';

export default function SendAmount({
  data,
  goForward,
  goBack,
}: WizardComponent) {
  return (
    <div className="bg-blue h-screen flex flex-col justify-between overflow-auto">
      <div className="pl-[28px] mb-[16px]">
        <div className="flex items-center pt-[16px] pb-[6px]">
          <IconButton variant="custom" className="mr-[10px]" onClick={goBack}>
            <BackArrowSvg />
          </IconButton>
          <span className="text-[18px] text-white leading-[24px] font-manrope-bold">
            Send money to
          </span>
        </div>
        <div className="flex items-center pl-[48px]">
          <Avatar
            editable={false}
            url="/images/avatars/female.png"
            className="w-[39px] h-[39px] mr-[15px]"
          />
          <span className="text-[14px] text-white leading-[20px] font-manrope-bold">
            Lara Maria Madrigal
          </span>
        </div>
      </div>
      <div className="pl-[47px] text-white mb-[16px]">
        <div className="flex mb-[22px]">
          <span className="text-white/50 mr-[10px]">$</span>
          <div>
            <div className="font-manrope-bold text-[48px] leading-[48px] mb-[16px]">
              2,600
            </div>
            <div>CLP</div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-t-[30px] px-[20px] pt-[27px] pb-[34px]">
        <div className="grid grid-cols-3 mb-[27px]">
          <Button variant="naked" className="text-[25px] text-navy">
            1
          </Button>
          <Button variant="naked" className="text-[25px] text-navy">
            2
          </Button>
          <Button variant="naked" className="text-[25px] text-navy">
            3
          </Button>
          <Button variant="naked" className="text-[25px] text-navy">
            4
          </Button>
          <Button variant="naked" className="text-[25px] text-navy">
            5
          </Button>
          <Button variant="naked" className="text-[25px] text-navy">
            6
          </Button>
          <Button variant="naked" className="text-[25px] text-navy">
            7
          </Button>
          <Button variant="naked" className="text-[25px] text-navy">
            8
          </Button>
          <Button variant="naked" className="text-[25px] text-navy">
            9
          </Button>
          <div></div>
          <Button variant="naked" className="text-[25px] text-navy">
            0
          </Button>
          <Button variant="naked" className="text-[25px] text-navy">
            #
          </Button>
        </div>
        <Button onClick={() => goForward(data)}>Continue</Button>
      </div>
    </div>
  );
}
