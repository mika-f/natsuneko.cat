import React from "react";
import Head from "next/head";
import InternalLink from "next/link";

import ExternalLink from "../components/ExternalLink";

const Index: React.VFC<{}> = () => {
  return (
    <>
      <Head>
        <title>natsuneko.cat</title>
      </Head>
      <div className="relative flex flex-col h-full">
        <div className="mt-4 text-xl text-center">
          <ExternalLink
            className="underline"
            href="https://twitter.com/hashtag/stoprussianaggression"
          >
            #StopRussianAggression 💙💛
          </ExternalLink>
        </div>
        <div className="flex items-center justify-center flex-grow">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl">natsuneko.cat</h1>
            <p className="my-4 text-xl md:text-3xl">Web Engineer @ Tokyo</p>
            <p className="my-4 text-xl md:text-3xl">Es un gat!</p>
            <div className="flex items-center justify-center my-16 text-xl md:text-3xl">
              <InternalLink href="/about">
                <p className="mx-4 underline cursor-pointer">About</p>
              </InternalLink>
              <InternalLink href="/works">
                <p className="mx-4 underline cursor-pointer">Works</p>
              </InternalLink>
              <InternalLink href="/links">
                <p className="mx-4 underline cursor-pointer">Links</p>
              </InternalLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
