import { createContext } from 'react';

const TabContext = createContext({
  tab: 'Request',
  setTab: (_tab: string) => {
    console.error('setTab => Not implemented context function');
  },
});
export default TabContext;
