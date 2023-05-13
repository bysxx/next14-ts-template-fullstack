import type { IExample } from '@interfaces/example';
import { NextResponse } from 'next/server';

export function GET() {
  const data: IExample = {
    example: 'hello world!',
  };

  return NextResponse.json(data);
}
