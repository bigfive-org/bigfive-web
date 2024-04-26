import { useState, useEffect } from 'react';

interface Dimensions {
  width: number;
  height: number;
}

const useWindowDimensions = (): Dimensions => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return { width, height };
};

export default useWindowDimensions;
