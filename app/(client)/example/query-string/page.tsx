export default function QueryStringPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      {searchParams && (
        <div className="flex flex-col gap-y-4">
          <h1 className="mb-4 text-3xl">Query String Example</h1>
          <ul className="flex flex-col gap-y-4">
            {Object.entries(searchParams).map(([key, value]) => (
              <li key={key}>
                <strong>{key}</strong>: {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
