import Loading from 'app/common/components/ui/loading';
import { Suspense } from 'react';

import FetchingComponent from './fetching-component';

export const revalidate = 0;

export default function ExamplePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <Suspense fallback={<Loading />}>
        <FetchingComponent />
      </Suspense>
    </main>
  );
}
