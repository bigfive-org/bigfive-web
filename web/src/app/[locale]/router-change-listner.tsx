'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function RouteChangeListener() {
  const pathname = usePathname();
  const [changes, setChanges] = useState(0);

  useEffect(() => {
    const fusetag = window.fusetag || (window.fusetag = { que: [] });
    fusetag.que.push(function() {
      fusetag.pageInit();
    });
    setChanges((prev) => prev + 1);
  }, [pathname]);

  return <></>;
}
