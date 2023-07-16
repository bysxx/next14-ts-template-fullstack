export default function ExampleDynamicPage({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="flex flex-col gap-y-4">
        <h1 className="mb-4 text-3xl">Query String Example</h1>
        <span>Example Dynamic Link {params.id}</span>
      </div>
    </main>
  );
}
