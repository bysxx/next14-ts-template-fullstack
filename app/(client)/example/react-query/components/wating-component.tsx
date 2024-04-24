'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

function getBaseURL() {
  if (typeof window !== 'undefined') {
    return '';
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
}
const baseUrl = getBaseURL();

function useWaitQuery(props: { wait: number }) {
  const query = useSuspenseQuery({
    queryKey: ['wait', props.wait],
    queryFn: async () => {
      const url = `${baseUrl}/server/example?wait=${props.wait}`;

      const res: string = await (
        await fetch(url, {
          cache: 'no-store',
        })
      ).json();
      return res;
    },
  });

  return query;
}
export default function WaitingComponent(props: { wait: number }) {
  const { data } = useWaitQuery(props);

  return <li>result: {data}</li>;
}
