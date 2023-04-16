import { useRef, useState } from 'react';

const useFullScreen = () => {
  const [isFull, setIsFull] = useState(false);
  const element = useRef<HTMLDivElement | null>(null);
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      }
    }
    setIsFull(true);
  };

  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    setIsFull(false);
  };

  return { element, isFull, triggerFull, exitFull };
};

export default useFullScreen;
