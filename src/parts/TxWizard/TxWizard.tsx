import React, { useState } from 'react';
import clsx from 'classnames';
import Popup from '@/components/Popup';
import Tab from '@/components/Tab';
import SearchSvg from '@/assets/icons/search.svg';
import TextField from '@/components/TextField';
import AttachmentSvg from '@/assets/attachment.svg';
import CloseSvg from '@/assets/icons/close.svg';
import Image from 'next/image';
import IconButton from '@/components/IconButton';
import TOP_PEOPLE from '@/mock/top-people';
import { TX_LABELS, TX_TYPES } from '@/utils/constants/enums';
import Wizard, { WizardData } from '@/components/Wizard';
import RequestAmount from './request/RequestAmount';
import RequestSent from './request/RequestSent';
import SendAmount from './send/SendAmount';
import SelectPayment from './send/SelectPayment';
import SendDone from './send/SendDone';

type TxWizardProps = {
  open: boolean;
  onClose: () => void;
};

export default function TxWizard({ open, onClose }: TxWizardProps) {
  const [tab, setTab] = useState<string>(TX_TYPES.request);
  const [requestWizardOpen, setRequestWizardOpen] = useState(false);
  const [sendWizardOpen, setSendWizardOpen] = useState(false);

  const handleStartTx = () => {
    if (tab === TX_TYPES.request) {
      setRequestWizardOpen(true);
    } else {
      setSendWizardOpen(true);
    }
  };

  return (
    <Popup
      open={open}
      onClose={onClose}
      className={clsx('mt-[10vh] h-[90vh]', {
        'overflow-hidden': requestWizardOpen || sendWizardOpen,
      })}
    >
      <Tab
        active={tab}
        tabs={[
          { id: TX_TYPES.request, label: TX_LABELS[TX_TYPES.request] },
          { id: TX_TYPES.send, label: TX_LABELS[TX_TYPES.send] },
        ]}
        onSelect={(tabId) => setTab(tabId)}
        className="mb-[13px]"
      />
      <TextField
        placeholder="Name, @username, email, phone"
        size="small"
        startAdornment={<SearchSvg />}
        className="mb-[21px]"
      />
      {tab === TX_TYPES.request && (
        <div className="flex items-center mb-[21px]">
          <AttachmentSvg className="mr-[14px]" />
          <div>
            <div className="mb-[5px] text-[.875rem] font-manrope-medium text-black">
              Share your <span className="text-blue">Enviago.com</span> link
            </div>
            <div className="text-gray text-[12px] leading-[16px]">
              Text, post, or share your link to get paid
            </div>
          </div>
        </div>
      )}
      <h2 className="text-[18px] font-manrope-bold leading-[24px] text-black mb-[9px]">
        Top people
      </h2>
      <div className="grid grid-cols-1 gap-[9px] mb-[12px]">
        {TOP_PEOPLE.map(({ username, id }, idx) => (
          <div
            key={idx}
            onClick={handleStartTx}
            className="flex items-center px-[16px] py-[19px] bg-gray-pale rounded-[18px]"
          >
            <Image
              src="/images/avatars/female.png"
              width={101}
              height={100}
              alt="avatar"
              className="mr-[14px] w-[39px] h-[39px]"
            />
            <div>
              <div className="text-[.875rem] leading-[20px] text-dark mb-[4px]">
                {username}
              </div>
              <div className="text-[12px] leading-[16px] text-gray">{id}</div>
            </div>
          </div>
        ))}
      </div>
      <IconButton variant="custom" onClick={onClose}>
        <CloseSvg />
      </IconButton>
      <Wizard
        open={requestWizardOpen}
        initData={{}}
        steps={[RequestAmount, RequestSent]}
        onClose={() => setRequestWizardOpen(false)}
        onCompleted={(_data: WizardData) => setRequestWizardOpen(false)}
      />
      <Wizard
        open={sendWizardOpen}
        initData={{}}
        steps={[SendAmount, SelectPayment, SendDone]}
        onClose={() => setSendWizardOpen(false)}
        onCompleted={(_data: WizardData) => setSendWizardOpen(false)}
      />
    </Popup>
  );
}
