import type { IExample } from 'app/example/interfaces';
import { NextResponse } from 'next/server';

export function GET() {
  // const data = await getExample()
  const data: IExample = {
    title: 'hello world!',
    description: 'This is an example route.',
  };

  return NextResponse.json(data);
}
