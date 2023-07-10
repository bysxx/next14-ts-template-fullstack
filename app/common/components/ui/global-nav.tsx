import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

function GlobalNav() {
  return (
    <nav className="sticky top-0 grid h-16 w-full grid-cols-2 items-center justify-center bg-[hsla(0,0%,100%,.8)] px-8 py-4 shadow-bottom backdrop-blur-sm backdrop-saturate-150">
      <div className="flex justify-start text-2xl text-gray-900">
        <Link href="/">Next 13</Link>
      </div>

      <div className="flex justify-end gap-x-2 text-gray-500">
        <Link href="/example">Example</Link>
        <a
          className="ml-2 flex items-center gap-x-1"
          href="https://github.com/bysxx/next-ts-template-tailwind"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
          <span>Source Code</span>
        </a>
      </div>
    </nav>
  );
}

export default GlobalNav;
