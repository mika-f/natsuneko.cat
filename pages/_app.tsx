import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";

import "../styles/globals.css";

import useWindowSize from "../hooks/useWindowSize";
import Background from "../components/Background";
import Footer from "../components/Footer";

const App = ({ Component, pageProps }) => {
  const window = useWindowSize();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.height / 100}px`
    );
  }, [window]);

  return (
    <div className="overflow-x-hidden">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Background />
      <div className="flex flex-col w-full h-screen min-h-screen">
        <div className="flex flex-col min-h-screen overflow-y-auto">
          <div className="flex-grow">
            <Component {...pageProps} />
          </div>
          <div className="z-10">
            <Footer />
          </div>
        </div>
      </div>
      <Script
        src="https://kit.fontawesome.com/a1f4482f91.js"
        crossOrigin="anonymous"
      />
    </div>
  );
};

export default App;
