import Button from '@/components/Button';
import TextField from '@/components/TextField';

export default function AddCard() {
  return (
    <div className="rounded-[18px] bg-white px-[24px] py-[26px]">
      <div className="grid grid-cols-2 gap-[14px]">
        <TextField placeholder="Full name" />
        <TextField placeholder="Routing number" />
        <TextField placeholder="Account number" />
        <TextField placeholder="Confirm account number" />
        <Button className="col-span-2">Save</Button>
      </div>
    </div>
  );
}
