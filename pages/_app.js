import * as React from 'react';
import 'nprogress/nprogress.css';
import '../styles/globals.css';
import 'swiper/css';
import 'swiper/css/autoplay';

import Router from 'next/router';
import NProgress from 'nprogress';

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on('routeChangeStart', handleRouteStart);
    Router.events.on('routeChangeComplete', handleRouteDone);
    Router.events.on('routeChangeError', handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off('routeChangeStart', handleRouteStart);
      Router.events.off('routeChangeComplete', handleRouteDone);
      Router.events.off('routeChangeError', handleRouteDone);
    };
  }, []);

  return <Component {...pageProps} />;
}
