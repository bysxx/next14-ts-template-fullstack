// eslint-disable-next-line
import { NextResponse } from 'next/server';

export async function GET() {
  // eslint-disable-next-line
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return NextResponse.json('hello world!');
}
