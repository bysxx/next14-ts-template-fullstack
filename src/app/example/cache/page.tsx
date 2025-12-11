"use cache";

import { cacheLife } from "next/cache";
import { getExampleData } from "./actions";

export default async function CachePage() {
  const data = await getExampleData();
  cacheLife({
    stale: 5,
    revalidate: 10,
  });

  return (
    <div>
      <h1>Cached Page</h1>
      <p>{data.message}</p>
    </div>
  );
}
