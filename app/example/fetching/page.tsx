import Loading from 'app/common/components/ui/loading';
import { Suspense } from 'react';

import ClientComponent from './client-component';
import FetchingComponent from './fetching-component';

export const runtime = 'edge';

export default function ExamplePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Async Server Component */}
        <FetchingComponent />
      </Suspense>

      <ClientComponent />
    </main>
  );
}
