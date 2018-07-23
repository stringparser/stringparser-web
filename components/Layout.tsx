import Head from 'next/head';
import { injectGlobal } from 'styled-components';

import { zIndex } from './theme';
import { forMedia } from './mixins';
import { FontHeadLink, contentFont } from './Font';

import Navbar from './Navbar';
import Footer from './Footer';
import { BACKEND_URL } from '../config/client';

injectGlobal`
  html {
    font-size: 12px;
  }
  ${forMedia('tablet', `
    html {
      font-size: 16px;
    }
  `)}

  html,
  body {
    margin: 0;
    font-smoothing: subpixel-antialiased;
  }

  body {
    ${contentFont}
    background-color: snow;
  }

  * {
    z-index: ${zIndex.foreground};
    box-sizing: border-box;
  }

  a {
    color: currentColor;
  }
`;

const logo = `${BACKEND_URL}/static/img/logo.png`;

const Layout: React.SFC = ({ children }) => (
  <main>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="white" />
      <meta name="viewport" content="width=device-width" user-scalable="no" />

      <FontHeadLink />
      <link rel="apple-touch-icon" href={logo} />
      <link rel="icon" type="image/png" href={logo} />

      <title>stringparser</title>
      <meta name="description" content="Freelance Software Engineer" />
    </Head>

    <Navbar />

    {children}

    <Footer />
  </main>
);

export default Layout;
