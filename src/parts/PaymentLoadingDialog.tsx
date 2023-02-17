import Dialog from '@/components/Dialog';
import LoadingSvg from '@/assets/loading.svg';

type PaymentLoadingDialogProps = {
  open: boolean;
  onClose: () => void;
};

export default function PaymentLoadingDialog({
  open,
  onClose,
}: PaymentLoadingDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="text-center w-[323px] bg-white rounded-[25px] px-[90px] py-[40px]"
    >
      <LoadingSvg className="mx-auto mb-[19px]" />
      <div className="font-manrope-bold text-[22px] leading-[32px] mb-[8px]">
        Processing...
      </div>
      <div className="text-[14px] text-gray-dark leading-[18px]">
        We are processing your paymet.
      </div>
    </Dialog>
  );
}
