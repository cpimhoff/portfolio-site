import Head from 'next/head';
import '../../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Charlie Imhoff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
