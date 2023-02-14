import { createContext } from 'react';

const TabContext = createContext({
  tab: 'Request',
  setTab: (tab: string) => {
    console.log(tab);
  },
});
export default TabContext;
