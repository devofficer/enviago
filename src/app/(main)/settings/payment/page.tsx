import Button from '@/components/Button';
import PaymentMethod from '@/parts/PaymentMethod';
import LINKS from '@/utils/constants/links';

export default function Payment() {
  return (
    <>
      <PaymentMethod className="mb-[22px]" itemClass="bg-white" />
      <Button className="mb-[18px]" href={LINKS.settings.payment.linkBank.path}>
        Connect new bank account
      </Button>
      <Button variant="outlined" href={LINKS.settings.payment.addCard.path}>
        Add new credit card
      </Button>
    </>
  );
}
