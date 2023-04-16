import { useEffect, useState } from 'react';

const useNetwork = (onChange: (online: boolean) => void) => {
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    const handleChange = () => {
      onChange(navigator.onLine);
      setStatus(navigator.onLine);
    };

    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    };
  }, [onChange]);

  return status;
};

export default useNetwork;
