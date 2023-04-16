import Link from 'next/link';

function GlobalNav() {
  return (
    <nav className="sticky top-0 grid h-16 w-full grid-cols-2 items-center justify-center bg-white px-8 py-4 shadow-bottom">
      <div className="flex justify-start text-2xl">Logo</div>
      <div className="flex justify-end gap-x-2 text-blue-400">
        <Link href="/">Home</Link>
        <Link href="/example">Example</Link>
      </div>
    </nav>
  );
}

export default GlobalNav;
