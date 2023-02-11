import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
import { getCurrentBreakpoint } from '@/utils/tailwind';

const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState<string>(getCurrentBreakpoint());

  useEffect(() => {
    const calcInnerWidth = throttle(() => {
      setBrkPnt(getCurrentBreakpoint());
    }, 200);
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return brkPnt;
};

export default useBreakpoint;
