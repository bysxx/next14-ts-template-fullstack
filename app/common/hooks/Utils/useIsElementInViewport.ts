import { useEffect, useRef, useState } from 'react';

export const useIsElementInViewport = (options?: IntersectionObserverInit) => {
  const elementRef = useRef<HTMLDivElement | HTMLImageElement | HTMLParagraphElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const callback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry) {
      setIsVisible(entry.isIntersecting);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [elementRef, options]);

  return { elementRef, isVisible };
};
