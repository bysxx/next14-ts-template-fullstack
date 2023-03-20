import Post from '@components/CompoundExample/Post';
import { getExampleData } from '@libs/api/example';
import type { NextPage } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';

const MainPage: NextPage = () => {
  const { data } = useQuery('example', getExampleData);
  return (
    <main className="flex h-screen w-full items-center justify-center gap-x-4">
      <h1 className="bg-white text-lg">main</h1>
      <section>
        <Post>
          <Post.Title />
          <Post.Comment />
          <Post.Buttons />
        </Post>
      </section>
      {data ? data.name : 'loading'}
      <section>
        <ul>
          <li>style reset test(list)</li>
          <button>style reset test(button)</button>
        </ul>
      </section>
    </main>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('example', getExampleData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default MainPage;
