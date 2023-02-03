import clsx from 'classnames';
import type { Icons } from './Icon';
import Icon from './Icon';

type IconButtonProps = {
  icon: Icons;
  className?: string;
  variant?: 'circle' | 'square';
};

export default function IconButton({
  icon,
  className,
  variant = 'square',
}: IconButtonProps) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center hover:scale-[1.25] transition-all p-[12px] ',
        className,
        {
          'bg-blue-ice rounded-[11px] w-[2.5rem] h-[2.5rem]':
            variant === 'square',
          'w-[42px] h-[42px] rounded-full border border-gray-trans':
            variant === 'circle',
        }
      )}
    >
      <Icon type={icon} className="w-full h-full" />
    </div>
  );
}
