import Head from 'next/head';
import { Carousel } from '../components/Carousel';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className="w-full">
        <Carousel />
      </main>
    </div>
  );
}
