import { useMemo, useState } from 'react';

export type WizardData = { [key: string]: string };
export type WizardComponentProps = {
  goForward: (data: WizardData) => void;
  goBack: () => void;
  onClose: () => void;
  data: WizardData;
};

type WizardProps = {
  initData: WizardData;
  steps: Array<React.FC<WizardComponentProps>>;
  onCompleted: (_data: WizardData) => void;
  open: boolean;
  onClose: () => void;
};

export default function Wizard({
  open,
  steps,
  initData,
  onClose,
  onCompleted,
}: WizardProps) {
  const [cursor, setCursor] = useState(0);
  const [data, setData] = useState(initData);
  const CurrentComponent = useMemo(() => steps[cursor], [steps, cursor]);

  const handleGoForward = (_data: { [key: string]: string }) => {
    setData(_data);

    if (cursor === steps.length - 1) {
      onCompleted(_data);
      setCursor(0);
    } else {
      setCursor((cur) => cur + 1);
    }
  };

  const handleGoBack = () => {
    if (cursor > 0) {
      setCursor(cursor - 1);
    }
  };

  return open ? (
    <div className="fixed inset-0 z-wizard main-content:overflow-hidden">
      <CurrentComponent
        data={data}
        goForward={handleGoForward}
        goBack={handleGoBack}
        onClose={onClose}
      />
    </div>
  ) : null;
}
