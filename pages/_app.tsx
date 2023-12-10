import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import Layout from '@/components/Layouts';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);  

  return (
    <div>
      {/* <NextNProgress color="#FFB800" startPosition={0.3} stopDelayMs={100} height={2} showOnShallow={true} /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
