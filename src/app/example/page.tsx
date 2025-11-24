import Link from "next/link";

export default function ExamplePage() {
  const examples = [
    {
      title: "Dynamic Routing",
      href: "/example/dynamic/123",
      description: "Dynamic segments and parameters handling in App Router.",
    },
    {
      title: "Data Fetching",
      href: "/example/fetching",
      description: "Server-side and client-side data fetching patterns.",
    },
    {
      title: "Query Strings",
      href: "/example/query-string?hello=world&code=clean",
      description: "URL search parameters handling and state management.",
    },
    {
      title: "React Query",
      href: "/example/react-query",
      description: "Client state management with TanStack Query integration.",
    },
    {
      title: "Server Actions",
      href: "/example/server-actions",
      description: "Form handling and mutations with Next.js Server Actions.",
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Example Components</h1>
        <p className="mt-2 text-lg leading-8 text-slate-600">
          Explore various features and implementation patterns of Next.js 15.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
          {examples.map((example) => (
            <Link
              key={example.href}
              href={example.href}
              className="group flex flex-col rounded-2xl bg-white/50 p-8 shadow-sm ring-1 ring-slate-900/5 transition-all hover:-translate-y-1 hover:shadow-md hover:ring-indigo-600/20 hover:bg-white"
            >
              <h3 className="text-lg font-semibold leading-7 text-slate-900 group-hover:text-indigo-600 transition-colors">
                {example.title}
              </h3>
              <p className="mt-2 flex-auto text-sm leading-6 text-slate-600">{example.description}</p>
              <p className="mt-6 flex items-center gap-x-1 text-sm font-semibold leading-6 text-indigo-600">
                View demo
                <span aria-hidden="true" className="block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
