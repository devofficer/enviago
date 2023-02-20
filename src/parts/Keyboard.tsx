import Button from '@/components/Button';
import { twMerge } from 'tailwind-merge';

type KeyboardProps = {
  className?: string;
};

export default function Keyboard({ className }: KeyboardProps) {
  return (
    <div className={twMerge('bg-white grid grid-cols-3', className)}>
      <Button variant="naked" className="text-[25px] text-navy">
        1
      </Button>
      <Button variant="naked" className="text-[25px] text-navy">
        2
      </Button>
      <Button variant="naked" className="text-[25px] text-navy">
        3
      </Button>
      <Button variant="naked" className="text-[25px] text-navy">
        4
      </Button>
      <Button variant="naked" className="text-[25px] text-navy">
        5
      </Button>
      <Button variant="naked" className="text-[25px] text-navy">
        6
      </Button>
      <Button variant="naked" className="text-[25px] text-navy">
        7
      </Button>
      <Button variant="naked" className="text-[25px] text-navy">
        8
      </Button>
      <Button variant="naked" className="text-[25px] text-navy">
        9
      </Button>
      <div></div>
      <Button variant="naked" className="text-[25px] text-navy">
        0
      </Button>
      <Button variant="naked" className="text-[25px] text-navy">
        #
      </Button>
    </div>
  );
}
