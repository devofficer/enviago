import Button from '@/components/Button';
import TextField from '@/components/TextField';

export default function AddCard() {
  return (
    <div className="rounded-[18px] bg-white px-[24px] py-[26px]">
      <div className="grid grid-cols-2 gap-[14px] mb-[14px]">
        <TextField placeholder="Name on the card" value="Anne Novak" />
        <TextField placeholder="Card number" value="2712-2718-2917-8293" />
        <div className="grid grid-cols-2 gap-[14px]">
          <TextField placeholder="Expiration date" value="12/01" />
          <TextField placeholder="CVV" value="829" />
        </div>
        <TextField placeholder="Country" value="United States" />
      </div>
      <Button>Save</Button>
    </div>
  );
}
