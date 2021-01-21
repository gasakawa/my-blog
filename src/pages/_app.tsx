import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import GlobalStyles from '../styles/pages/global';
import { LayoutMain } from '../styles/pages/layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel='shortcut icon'
          href='https://gasakawa-blog.s3.amazonaws.com/favicon_3220a7e784.png'
        />
        <meta
          name='viewport'
          content='width=device-width,minimum-scale=1,initial-scale=1.0'
        ></meta>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;800&family=Poppins:wght@300;400;500;600;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <GlobalStyles />
      <Sidebar />
      <LayoutMain>
        <Component {...pageProps} />
      </LayoutMain>
    </>
  );
};

export default MyApp;
