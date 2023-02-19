import Button from '@/components/Button';
import SyncSvg from '@/assets/sync.svg';

export default function MyContacts() {
  return (
    <>
      <div className="flex items-center justify-between bg-white rounded-[18px] pl-[40px] pr-[31px] py-[22px] mb-[23px]">
        <div className="flex items-center gap-[43px] mr-[32px]">
          <SyncSvg className="w-[53px] h-auto fill-blue" />
          <div>
            <div className="font-manrope-bold text-[22px] leading-[32px] mb-[9px]">
              Your contacts are not synced
            </div>
            <div className="text-gray-dark text-[14px] leading-[18px]">
              Sync your phone contacts to start receiving and sending payments
              from them.
            </div>
          </div>
        </div>
        <Button className="w-[121px]">Sync</Button>
      </div>
      <Button variant="outlined">Invite more friends to Enviago</Button>
    </>
  );
}
