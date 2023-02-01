import clsx from 'classnames';
import type { Icons } from "./Icon"
import Icon from './Icon';

type IconButtonProps = {
  icon: Icons,
  className?: string;
};

export default function IconButton(props: IconButtonProps) {
  return (
    <div className={clsx("flex items-center justify-center w-[2.5rem] h-[2.5rem] bg-blue-ice rounded-[11px]", props.className)}>
      <Icon type={props.icon} />
    </div>
  )
}