import App from 'next/app';
import Head from 'next/head';
import { createContext } from 'react';
import Sidebar from '../components/Sidebar';
import { getGlobal } from '../libs/api';
import GlobalStyles from '../styles/pages/global';
import { LayoutMain } from '../styles/pages/layout';
import Global from '../interfaces/global';

export const GlobalContext = createContext({} as Global);

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;
  return (
    <>
      <Head>
        <link rel='shortcut icon' href={global.favicon.url} />
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
      <GlobalContext.Provider value={global}>
        <LayoutMain>
          <Component {...pageProps} />
        </LayoutMain>
      </GlobalContext.Provider>
    </>
  );
};

MyApp.getInitialProps = async ctx => {
  const appProps = await App.getInitialProps(ctx);
  const global = await getGlobal();
  return {
    ...appProps,
    pageProps: {
      global,
    },
  };
};

export default MyApp;
