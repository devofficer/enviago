import { checkMobile } from '@/utils/helpers/next';
import SettingsDesktop from './desktop';
import SettingsMobile from './mobile';

export default function Settings() {
  return checkMobile() ? <SettingsMobile /> : <SettingsDesktop />;
}
