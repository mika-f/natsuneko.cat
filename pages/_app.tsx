import React from "react";
import Head from "next/head";
import Script from "next/script";

import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Script
        src="https://kit.fontawesome.com/a1f4482f91.js"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default App;
