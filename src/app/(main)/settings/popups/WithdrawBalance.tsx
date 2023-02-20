import Popup from '@/components/Popup';
import { SettingsPopup } from '../mobile';

export default function WithdrawBalancePopup({ open, onClose }: SettingsPopup) {
  return <Popup open={open} onClose={onClose}></Popup>;
}
