export default function ExampleDynamicPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1>Example Dynamic {params.id}</h1>
    </main>
  );
}
