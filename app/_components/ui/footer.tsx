import { AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="flex w-full justify-center border-t border-solid border-gray-400 py-4">
      <a
        className="ml-2 flex items-center gap-x-1 text-black"
        href="https://github.com/bysxx/next-ts-template-tailwind"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
        <span>Source Code</span>
      </a>
    </footer>
  );
}

export default Footer;
