import Link from "next/link";

export default function MainPage() {
  return (
    <main className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-600 ring-1 ring-slate-900/10 hover:ring-slate-900/20">
              Next.js 15 + TypeScript Starter{" "}
              <a href="/" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Build faster with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500">
              Modern Stack
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Minimal, clean, and ready for production. Optimized for developer experience with the latest Next.js 15
            features.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/example"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </Link>
            <a
              href="https://github.com/bysxx/next-ts-template-tailwind"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold leading-6 text-slate-900"
            >
              View on GitHub <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
          <FeatureCard title="Type Safe" description="Built with strict TypeScript configuration for reliable code." />
          <FeatureCard title="Fast & Modern" description="Powered by Next.js 15 and Tailwind CSS 4 ready." />
          <FeatureCard title="Scalable" description="Designed with a clean folder structure for growth." />
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
      <dt className="text-base leading-7 text-slate-600 font-semibold">{title}</dt>
      <dd className="order-first text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
        {/* Placeholder icon or number could go here, simplified to just text style for now */}
        <div className="mb-2 inline-block h-2 w-12 rounded bg-indigo-600/20"></div>
      </dd>
      <dd className="text-sm leading-6 text-slate-500">{description}</dd>
    </div>
  );
}
