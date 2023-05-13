import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MainPage() {
  return (
    <main className={`${inter.className} flex min-h-screen w-full flex-col items-center p-8`}>
      <h1 className="mb-4 text-3xl">main</h1>
    </main>
  );
}
