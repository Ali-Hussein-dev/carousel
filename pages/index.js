import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import * as React from 'react';
import Link from 'next/link';
import { Carousel } from '../components/Carousel';
import NProgress from 'nprogress';
NProgress.configure({ showSpinner: false });
export default function Home() {
  const router = useRouter();
  React.useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());
  }, []);
  return (
    <div>
      <main className="bg-slate-700 min-h-screen">
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Link href="/home">Home</Link>
        <div className=" flex justify-between relative">
          <div className="absolute left-0 h-full from-slate-700 to-transparent bg-gradient-to-r  w-24" />
          <Carousel />
          <div className="absolute right-0 h-full from-slate-700 to-transparent bg-gradient-to-l  w-24" />
        </div>
      </main>
    </div>
  );
}
