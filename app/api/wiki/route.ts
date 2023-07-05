import { NextResponse } from 'next/server';

export function GET() {
  const data: string = 'test';

  return NextResponse.json(data);
}
