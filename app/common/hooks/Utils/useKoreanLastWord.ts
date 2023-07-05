import { useState } from 'react';

const useKoreanLastWord = (word: string) => {
  const [isBig, setIsBig] = useState<boolean>(false);

  if (typeof word !== 'string') throw new Error('word type is not string');

  const lastLetter = word[word.length - 1] as string;
  const uni = lastLetter.charCodeAt(0);

  if (uni < 44032 || uni > 55203) throw new Error('Not Korean');

  setIsBig((uni - 44032) % 28 !== 0);

  return { isBig };
};

export default useKoreanLastWord;
