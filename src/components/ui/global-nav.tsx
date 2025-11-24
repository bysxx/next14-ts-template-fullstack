"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function GlobalNav() {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/80 px-6 py-3 backdrop-blur-xl transition-all supports-backdrop-filter:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-x-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-slate-900 hover:text-indigo-600 transition-colors">
              Next 16
            </span>
          </Link>
          <div className="hidden md:flex gap-x-6 text-sm font-medium text-slate-600">
            <Link href="/example" className="hover:text-indigo-600 transition-colors">
              Example
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <a
            className="hidden md:flex items-center gap-x-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            href="https://github.com/bysxx/next-ts-template-tailwind"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <div className="h-4 w-px bg-slate-200 hidden md:block" />

          {session?.user ? (
            <div className="flex items-center gap-x-4">
              <span className="text-sm font-medium text-slate-700 hidden sm:block">{session.user.name}</span>
              <button
                type="button"
                onClick={() => signOut()}
                className="rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600 hover:bg-indigo-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => signIn("kakao")}
              className="rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default GlobalNav;
