import Item from './item';

export default function ExamplePage() {
  return (
    <main className="flex h-screen flex-col items-center p-8">
      <h1 className="mb-4 text-3xl">Example</h1>
      <ul className="flex flex-col gap-y-4">
        <Item id="1" />
        <Item id="2" />
      </ul>
    </main>
  );
}
