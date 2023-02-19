import { twMerge } from 'tailwind-merge';

type ProgressBarProps = {
  value: number;
  className?: string;
};

export default function ProgressBar({ value, className }: ProgressBarProps) {
  return (
    <div
      className={twMerge('w-full bg-white rounded-full h-[15px]', className)}
    >
      <div
        className="bg-blue-600 h-[15px] rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
