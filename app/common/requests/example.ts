import type { IExample } from '@interfaces/example';

export async function getExample() {
  const res = await fetch('/api/example');
  const data: IExample = await res.json();

  return data;
}
