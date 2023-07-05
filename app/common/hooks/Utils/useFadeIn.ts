import { useEffect, useRef } from 'react';

const useFadeIn = (duration: number = 1, delay: number = 0) => {
  // TODO. useClick과 마찬가지로 HTML 태그 전체를 포괄할 수 있는 타입 정의 필요
  const element = useRef<HTMLDivElement | HTMLHeadingElement | HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = '1';
    }
  }, [duration, delay]);

  return { ref: element, style: { opacity: 0 } };
};

export default useFadeIn;
