import Loading from '@components/ui/loading';
import { Suspense } from 'react';

import WaitingComponent from './wating-component';

export const revalidate = 0;

export default function ReactQueryExample() {
  return (
    <main>
      <ul>
        <Suspense fallback={<div>waiting 100....</div>}>
          <WaitingComponent wait={100} />
        </Suspense>
        <Suspense fallback={<div>waiting 200....</div>}>
          <WaitingComponent wait={200} />
        </Suspense>
        <Suspense fallback={<div>waiting 300....</div>}>
          <WaitingComponent wait={300} />
        </Suspense>
        <Suspense fallback={<div>waiting 400....</div>}>
          <WaitingComponent wait={400} />
        </Suspense>
        <Suspense fallback={<div>waiting 500....</div>}>
          <WaitingComponent wait={500} />
        </Suspense>
        <Suspense fallback={<div>waiting 600....</div>}>
          <WaitingComponent wait={600} />
        </Suspense>
        <Suspense fallback={<div>waiting 700....</div>}>
          <WaitingComponent wait={700} />
        </Suspense>
      </ul>

      <div className="flex-col items-center justify-center border p-2">
        <Suspense fallback={<Loading />}>
          <WaitingComponent wait={800} />
          <WaitingComponent wait={900} />
          <WaitingComponent wait={1000} />
        </Suspense>
      </div>
    </main>
  );
}
