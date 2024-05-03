'use client'

import { useEffect } from 'react';

export const AdsContainer = () => {
  useEffect(() => {
    window.fusetag?.pageInit();
  }, []);
  return <></>;
};
