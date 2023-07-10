import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MainPage() {
  return (
    <main className={`${inter.className} flex min-h-screen w-full flex-col items-center p-8`}>
      <h1 className="mb-4 text-5xl font-bold">Welcome to Next.js 13</h1>
      <p className="text-lg">Next 13 + TypeScript + TailwindCSS</p>
    </main>
  );
}
