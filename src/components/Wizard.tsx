import { useMemo, useState } from 'react';

type WizardData = { [key: string]: string };
type WizardComponentProps = {
  goForward: (data: WizardData) => void;
  goBack: () => void;
  data: WizardData;
};

type WizardProps = {
  initData: WizardData;
  steps: Array<React.FC<WizardComponentProps>>;
  onCompleted: (data: WizardData) => void;
};

export default function Wizard({ steps, initData, onCompleted }: WizardProps) {
  const [cursor, setCursor] = useState(0);
  const [data, setData] = useState(initData);
  const CurrentComponent = useMemo(() => steps[cursor], [steps, cursor]);

  const handleGoForward = (_data: { [key: string]: string }) => {
    setData(_data);

    if (cursor === steps.length - 1) {
      onCompleted(_data);
    } else {
      setCursor((cur) => cur + 1);
    }
  };

  const handleGoBack = () => {
    if (cursor > 0) {
      setCursor(cursor - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-wizard">
      <CurrentComponent
        data={data}
        goForward={handleGoForward}
        goBack={handleGoBack}
      />
    </div>
  );
}
