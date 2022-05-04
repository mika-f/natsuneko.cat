import React from "react";
import Image from "next/image";
import Head from "next/head";
import InternalLink from "next/link";

import ExternalLink from "../components/ExternalLink";
import FontAwesome from "../components/FontAwesome/Icon";

const Links: React.VFC<{}> = () => {
  return (
    <>
      <Head>
        <title>Links | natsuneko.cat</title>
      </Head>
      <div className="relative flex flex-col h-full my-4">
        <div className="flex items-center justify-center flex-grow mx-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl">Links</h1>
            <div className="my-8">
              <ul className="flex flex-row gap-4 text-4xl">
                <li>
                  <ExternalLink href="https://twitter.com/6jz">
                    <FontAwesome fa="brands" icon="twitter-square" />
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://github.com/mika-f">
                    <FontAwesome fa="brands" icon="github" />
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https//natsuneko.blog">
                    <FontAwesome fa="solid" icon="square-rss" />
                  </ExternalLink>
                </li>
              </ul>
            </div>
            <InternalLink href="/">
              <p className="text-lg cursor-pointer md:text-xl">&lt;&lt; Home</p>
            </InternalLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Links;
