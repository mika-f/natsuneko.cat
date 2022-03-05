import React, { useEffect } from "react";
import Head from "next/head";

import Background from "../components/Background";
import Content from "../components/Content";
import Footer from "../components/Footer";
import useWindowSize from "../hooks/useWindowSize";
import ExternalLink from "../components/ExternalLink";

const Index: React.VFC<{}> = () => {
  const window = useWindowSize();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.height / 100}px`
    );
  }, [window]);

  return (
    <>
      <Head>
        <title>natsuneko.cat</title>
      </Head>
      <Background />
      <div className="relative flex flex-col h-full">
        <div className="text-center mt-4 text-xl">
          <ExternalLink
            className="underline"
            href="https://twitter.com/hashtag/stoprussianaggression"
          >
            #StopRussianAggression 💙💛
          </ExternalLink>
        </div>
        <div className="flex flex-grow items-center justify-center">
          <Content />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
