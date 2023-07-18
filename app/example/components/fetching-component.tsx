export async function getData() {
  // eslint-disable-next-line
  return await new Promise((resolve) => setTimeout(resolve, 1000)).then((_) => 'Success!');
}

export default async function FetchingComponent() {
  const data = await getData();

  return <div className="">{data}</div>;
}
