import { useState } from 'react';

const useCustomHook = () => {
  const [data, setData] = useState<string | null>(null);
  const isDataExist = () => {
    return data !== null;
  };

  return {
    data,
    setData,
    isDataExist,
  };
};

export type ICustomHook = ReturnType<typeof useCustomHook>;

export default useCustomHook;
