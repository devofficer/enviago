import { useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export type WizardData = { [key: string]: string };
export type WizardComponent = {
  goForward: (_data?: WizardData) => void;
  goBack: (_data?: WizardData) => void;
  goTo: (_index: number, _data?: WizardData) => void;
  onClose: () => void;
  data: WizardData;
};

type WizardProps = {
  className?: string;
  initData: WizardData;
  steps: Array<React.FC<WizardComponent>>;
  onCompleted: (_data: WizardData) => void;
  open: boolean;
  onClose: () => void;
};

export default function Wizard({
  open,
  steps,
  initData,
  className,
  onClose,
  onCompleted,
}: WizardProps) {
  const [cursor, setCursor] = useState(0);
  const [data, setData] = useState(initData);
  const Component = useMemo(() => steps[cursor], [steps, cursor]);

  const handleGoForward = (newData?: WizardData) => {
    setData((d) => ({ ...d, ...newData }));

    if (cursor === steps.length - 1) {
      onCompleted({ ...data, ...newData });
      setCursor(0);
    } else {
      setCursor((cur) => cur + 1);
    }
  };

  const handleGoBack = (newData?: WizardData) => {
    if (cursor > 0) {
      if (newData) {
        setData((d) => ({ ...d, ...newData }));
      }
      setCursor(cursor - 1);
    } else {
      onClose();
    }
  };

  const handleGoTo = (index: number, newData?: WizardData) => {
    if (index < 0 || index >= steps.length) {
      throw 'Invalid wizard index';
    }
    setData((d) => ({ ...d, ...newData }));
    setCursor(index);
  };

  return open && Component ? (
    <div
      className={twMerge(
        'fixed inset-0 z-wizard main-content:overflow-hidden',
        className
      )}
    >
      <Component
        data={data}
        goForward={handleGoForward}
        goBack={handleGoBack}
        goTo={handleGoTo}
        onClose={onClose}
      />
    </div>
  ) : null;
}
