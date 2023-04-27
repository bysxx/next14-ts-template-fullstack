import Image from 'next/image';

export default function ImageComponent() {
  return (
    <figure className="mx-auto flex flex-col items-center gap-y-2 rounded-lg bg-white p-4 shadow-lg">
      <span>next/image</span>
      <Image src="/images/test.jpeg" alt="test" height="150" width="150" />
    </figure>
  );
}
