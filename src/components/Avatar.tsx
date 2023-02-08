import Image from 'next/image';
import IconButton from './IconButton';
import clsx from 'classnames';

type AvatarProps = {
  className?: string;
  url?: string;
};

export default function Avatar({
  className,
  url = '/images/avatars/user.svg',
}: AvatarProps) {
  return (
    <div className={clsx(className, 'relative w-[100px] h-[100px]')}>
      <Image
        src={url}
        width={100}
        height={100}
        alt="user"
        className="rounded-full"
      />
      <IconButton
        variant="custom"
        className="absolute bottom-[-4px] right-[-4px]"
      >
        <Image
          src="/images/icons/pen.svg"
          width={36}
          height={36}
          alt="pen"
          className="w-[36px] h-[36px] rounded-full"
        />
      </IconButton>
    </div>
  );
}
