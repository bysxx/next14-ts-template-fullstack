import { Suspense } from "react";

async function QueryStringContent(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;

  if (!searchParams) return null;

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="mb-4 text-3xl">Query String Example</h1>
      <ul className="flex flex-col gap-y-4">
        {Object.entries(searchParams).map(([key, value]) => (
          <li key={key}>
            <strong>{key}</strong>:{" "}
            {Array.isArray(value) ? value.join(", ") : value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function QueryStringPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <Suspense fallback={<div>Loading query strings...</div>}>
        <QueryStringContent searchParams={props.searchParams} />
      </Suspense>
    </main>
  );
}
