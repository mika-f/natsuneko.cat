import React from "react";
import Image from "next/image";
import Head from "next/head";
import InternalLink from "next/link";

import ExternalLink from "../components/ExternalLink";

type Item = {
  text: string;
  href: string;
};

const ITEMS_2022: Item[] = [
  {
    text: "(Personal) FBX Batch Export",
    href: "https://github.com/natsuneko-laboratory/fbx-batch-export",
  },
  {
    text: "(Personal) Git LFS Proxy",
    href: "https://github.com/natsuneko-laboratory/git-lfs-proxy",
  },
];

const ITEMS_2021: Item[] = [
  {
    text: "ClusterGAMEJAM 2021 in SUMMER | ビジュアル部門入賞 - JumpUp🍎Girls",
    href: "https://www.contest.cluster.mu/gamejam2021summer-award",
  },
  {
    text: "(Personal) Refined Animation Property",
    href: "https://github.com/natsuneko-laboratory/refined-animation-property",
  },
  {
    text: "(Personal) Animator Controller Tool Post Processing",
    href: "https://github.com/natsuneko-laboratory/animator-controller-tool-post-processing",
  },
  {
    text: "(Personal) Text Mesh Creator",
    href: "https://github.com/natsuneko-laboratory/text-mesh-creator",
  },
  {
    text: "(Personal) Animation Auto Assignment",
    href: "https://github.com/natsuneko-laboratory/animation-auto-assignment",
  },
  {
    text: "(Personal) Enhanced Transform Editor",
    href: "https://github.com/natsuneko-laboratory/enhanced-transform-editor",
  },
];

const ITEMS_2020: Item[] = [
  {
    text: "ClusterGAMEJAM 2020 in WINTER | Unity Japan 賞",
    href: "https://www.contest.cluster.mu/gamejam2020winter-home",
  },
  {
    text: "Virtual Market 5 出展",
    href: "https://www.store.vket.com/v5/catalog/circle/3053",
  },
  {
    text: "(Personal) Asset Merger",
    href: "https://github.com/natsuneko-laboratory/asset-merger",
  },
  {
    text: "(Personal) Constraint by Humanoid",
    href: "https://github.com/natsuneko-laboratory/constraint-by-humanoid",
  },
  {
    text: "(Personal) Atlasization",
    href: "https://github.com/natsuneko-laboratory/atlasization",
  },
];

const About: React.VFC<{}> = () => {
  return (
    <>
      <Head>
        <title>Works | natsuneko.cat</title>
      </Head>
      <div className="relative flex flex-col h-full my-4">
        <div className="flex items-center justify-center flex-grow mx-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl">Works</h1>
            <div className="my-8 text-xl md:text-2xl">
              Here are some of the projects I have created and been involved
              with.
            </div>

            <ul>
              <li className="my-8">
                2022
                <ul className="my-2">
                  {ITEMS_2022.map((w) => {
                    return (
                      <li key={w.href}>
                        <ExternalLink href={w.href} hasUnderline>
                          {w.text}
                        </ExternalLink>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li>
                2021
                <ul className="my-2">
                  {ITEMS_2021.map((w) => {
                    return (
                      <li key={w.href}>
                        <ExternalLink href={w.href} hasUnderline>
                          {w.text}
                        </ExternalLink>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="my-8">
                2020
                <ul className="my-2">
                  {ITEMS_2020.map((w) => {
                    return (
                      <li key={w.href}>
                        <ExternalLink href={w.href} hasUnderline>
                          {w.text}
                        </ExternalLink>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
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
