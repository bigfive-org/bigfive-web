import { useState, useEffect } from 'react';

const useTimer = (): number => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return counter;
};

export default useTimer;
