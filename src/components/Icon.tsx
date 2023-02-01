import Image from "next/image";
import clsx from 'classnames';

const icons = {
  logo: {
    src: "/images/logo.svg",
    width: 202,
    height: 49,
  },
  google: {
    src: "/images/icons/google.svg",
    width: 18,
    height: 18,
  },
  forward: {
    src: "/images/icons/forward-arrow.svg",
    width: 20,
    height: 18,
  },
  backward: {
    src: "/images/icons/backward-arrow.svg",
    width: 20,
    height: 18,
  }
};

type IconProps = {
  width?: number;
  height?: number;
  className?: string;
  type: Icons;
};

export type Icons = keyof typeof icons;

export default function Icon(props: IconProps) {
  const icon = icons[props.type];

  return (
    <Image className={clsx(props.className)} src={icon.src} width={props.width || icon.width} height={props.height || icon.height} alt={props.type} />
  )
}