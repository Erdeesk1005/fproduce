import { GetStaticProps } from 'next';
import { getMockData } from '@/lib/mock';

type Props = {
  data: {
    title: string;
    description: string;
  };
};

export default function Home({ data }: Props) {
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data = getMockData(locale || 'en');

  return {
    props: {
      data
    }
  };
};
