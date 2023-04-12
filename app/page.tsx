import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`${inter.className}flex h-screen w-full items-center justify-center gap-x-4`}>
      <h1 className="bg-white text-lg">main</h1>
      <section>
        <ul>
          <li>style reset test(list)</li>
          <button>style reset test(button)</button>
        </ul>
      </section>
    </main>
  );
}
