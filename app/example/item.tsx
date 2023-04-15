import Link from 'next/link';

interface Props {
  id: string;
}

export default function ExampleItem({ id }: Props) {
  return (
    <li>
      <Link href={`/example/${id}`}>Dynamic Example {id}</Link>
    </li>
  );
}
