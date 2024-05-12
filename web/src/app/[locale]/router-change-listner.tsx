'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function RouteChangeListener() {
  const pathname = usePathname();
  const [changes, setChanges] = useState(0);

  const noAds = ['/translations']

  useEffect(() => {
    if (noAds.includes(pathname)) {
      return;
    }
    const fusetag = window.fusetag || (window.fusetag = { que: [] });
    fusetag.que.push(function () {
      fusetag.pageInit({
        // Defer the first auction until FuseIds '1239469485' and '2323123233' are registered
        blockingFuseIds: ['1239469485', '2323123233']
      });
    });
    setChanges((prev) => prev + 1);
  }, [pathname]);

  return <></>;
}
