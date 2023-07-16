import Link from 'next/link';

interface Props {
  id: string;
}

export default function DynamicLinkBox({ id }: Props) {
  return (
    <li className="rounded-md border border-gray-300 p-4 shadow-md hover:shadow-lg">
      <Link href={`/example/dynamic/${id}`}>
        <div className="text-blue-500 hover:text-blue-700">Dynamic Link Example {id}</div>
      </Link>
    </li>
  );
}
