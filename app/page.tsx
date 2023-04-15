import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MainPage() {
  return (
    <main className={`${inter.className} flex h-screen w-full flex-col items-center p-8`}>
      <h1 className="mb-4 text-3xl">main</h1>
      <section>
        <ul>
          <li>style reset apply test(list)</li>
          <button>style reset apply test(button)</button>
        </ul>
      </section>
    </main>
  );
}
