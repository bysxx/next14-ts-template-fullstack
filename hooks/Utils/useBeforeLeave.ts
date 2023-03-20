import { useEffect } from 'react';

const useBeforeLeave = (onBefore: () => void) => {
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const { clientY } = e;
      if (clientY <= 0) {
        onBefore();
      }
    };

    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, [onBefore]);
};

export default useBeforeLeave;
