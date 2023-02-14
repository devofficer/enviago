import Image from 'next/image';
import IconButton from './IconButton';
import PenSvg from '@/assets/icons/pen.svg';
import { twMerge } from 'tailwind-merge';

type AvatarProps = {
  className?: string;
  editable?: boolean;
  url?: string;
};

export default function Avatar({
  className,
  editable = true,
  url = '/images/avatars/user.svg',
}: AvatarProps) {
  return (
    <div className={twMerge('relative w-[100px] h-[100px]', className)}>
      <Image
        src={url}
        width={101}
        height={100}
        alt="user"
        className="rounded-full"
      />
      {editable && (
        <IconButton
          variant="custom"
          className="absolute bottom-[-4px] right-[-4px]"
        >
          <PenSvg
            width={36}
            height={36}
            className="w-[36px] h-[36px] rounded-full"
          />
        </IconButton>
      )}
    </div>
  );
}
