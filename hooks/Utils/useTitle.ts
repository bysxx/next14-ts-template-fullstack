import { useEffect, useState } from 'react';

const useTitle = (initialTitle: string) => {
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    const updateTitle = () => {
      const htmlTitle = document.querySelector('title') as HTMLTitleElement;

      htmlTitle.innerText = title;
    };

    updateTitle();
  }, [title]);

  return setTitle;
};

export default useTitle;
