import React from "react";
import Image from "next/image";
import Head from "next/head";
import InternalLink from "next/link";

import ExternalLink from "../components/ExternalLink";

const About: React.VFC<{}> = () => {
  return (
    <>
      <Head>
        <title>About | natsuneko.cat</title>
      </Head>
      <div className="relative flex flex-col h-full">
        <div className="flex items-center justify-center flex-grow">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl">About</h1>
            <div className="flex items-center justify-center my-8">
              <div className="w-32 h-32 overflow-hidden rounded-full">
                <Image
                  height={512}
                  width={512}
                  src={"/natsuneko.png"}
                  alt="icon"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>

            <div className="mt-4 mb-6 text-xl md:text-2xl">
              <p>
                I&apos;m Natsuneko. Web Server-Side Engineer in Tokyo, Japan.
              </p>
              <p>
                I&apos;m currently learn Rust, Shader Programming, and 3D
                Modeling.
              </p>
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

export default About;
