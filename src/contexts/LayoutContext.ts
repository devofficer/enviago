import { createContext } from 'react';

const LayoutContext = createContext({
  sidebarOpen: true,
  setSidebarOpen: (_open: boolean) => {
    console.error('setSidebarOpen => Not implemented context function');
  },
});
export default LayoutContext;
