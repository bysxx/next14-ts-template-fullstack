import { Suspense } from "react";

async function DynamicContent(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="mb-4 text-3xl">Query String Example</h1>
      <span>Example Dynamic Link {params.id}</span>
    </div>
  );
}

export default function ExampleDynamicPage(props: { params: Promise<{ id: string }> }) {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicContent params={props.params} />
      </Suspense>
    </main>
  );
}
