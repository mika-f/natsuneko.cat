import React from "react";
import Head from "next/head";

import Content from "../components/Content";
import Footer from "../components/Footer";

const Index: React.VFC<{}> = () => {
  return (
    <>
      <Head>
        <title>natsuneko.cat</title>
      </Head>
      <div className="flex flex-col h-full">
        <div className="flex flex-grow items-center justify-center">
          <Content />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
