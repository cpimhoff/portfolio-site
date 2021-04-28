import Head from 'next/head';
import '../../styles/globals.css';
import NavBar from '../components/NavBar';

import 'video-react/dist/video-react.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Charlie Imhoff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <NavBar />

        <div
          style={{
            maxWidth: '39rem',
            margin: 'auto',
            padding: '1rem',
            paddingTop: 0,
          }}
        >
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
