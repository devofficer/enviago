'use client';

import React, { useEffect, useState } from 'react';

export default function withClient<T extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<T>
) {
  const ClientComponent = (props: T) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
      setHasMounted(true);
    }, []);

    return hasMounted ? <WrappedComponent {...props} /> : null;
  };

  return ClientComponent;
}
