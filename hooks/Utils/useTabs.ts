import { useState } from 'react';

interface Content {
  tab: string;
  content: string;
}

const useTabs = (initialTab: number, allTabs: Content[]) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default useTabs;
