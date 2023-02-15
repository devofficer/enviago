import { useEffect, useMemo, useState } from 'react';
import throttle from 'lodash.throttle';
import { getCurrentBreakpoint } from '@/utils/tailwind';

const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState<string | null>(null);
  const mobile = useMemo(
    () => brkPnt && ['xs', 'sm', 'md'].includes(brkPnt),
    [brkPnt]
  );

  useEffect(() => {
    const calcInnerWidth = throttle(() => {
      setBrkPnt(getCurrentBreakpoint());
    }, 200);
    window.addEventListener('resize', calcInnerWidth);
    calcInnerWidth();
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return {
    bp: brkPnt,
    mobile,
    desktop: !mobile,
  };
};

export default useBreakpoint;
