import { useEffect, useRef } from 'react';

const useClick = (onClick: () => void) => {
  // TODO. HTML 태그 전체를 포괄할 수 있는 타입 정의 필요
  const element = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const { current } = element;

    if (current) {
      current.addEventListener('click', onClick);
    }

    return () => {
      if (current) {
        current.removeEventListener('click', onClick);
      }
    };
  }, [onClick]);

  return element;
};

export default useClick;
