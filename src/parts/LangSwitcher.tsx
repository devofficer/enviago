import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type LangSwitcherProps = {
  className?: string;
};

export default function LangSwitcher({ className }: LangSwitcherProps) {
  return (
    <div className={twMerge('relative', className)}>
      <Image
        src="/images/language-switcher.svg"
        width={30}
        height={34}
        alt="avatar"
      />
    </div>
  );
}
