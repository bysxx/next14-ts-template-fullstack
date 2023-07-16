import Loading from 'app/common/components/ui/loading';
import Link from 'next/link';
import { Suspense } from 'react';

import ClientComponent from './components/client-component';
import DynamicLinkBox from './components/dynamic-link-box';
import FetchingComponent from './components/fetching-component';
import ImageComponent from './components/image-component';

export default function ExamplePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="mb-4 text-3xl">Example Components</h1>
      <div className="flex items-center gap-x-4">
        <ul className="flex flex-col gap-y-4">
          <DynamicLinkBox id="1" />
          <DynamicLinkBox id="2" />
        </ul>

        <ClientComponent />

        <Suspense fallback={<Loading />}>
          {/* @ts-expect-error Async Server Component */}
          <FetchingComponent />
        </Suspense>

        <ImageComponent />

        <Link className="border p-4" href="/example/query-string?hello=world&code=clean">
          QueryString Example
        </Link>
      </div>
    </main>
  );
}
