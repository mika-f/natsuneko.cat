import React from "react";
import ExternalLink from "./ExternalLink";

const START_YEAR = 2022;

const Footer: React.VFC<{}> = () => {
  const now = new Date().getFullYear();
  const year = START_YEAR === now ? START_YEAR : `${START_YEAR} - ${now}`;

  return (
    <footer className="text-center py-4">
      <p className="text-xl md:text-2xl">
        Copyright (c) {year} Natsuneko &lt;me@natsuneko.cat&gt;
      </p>
      <p className="text-sm md:text-base mt-0.5">
        .CAT is a top level domain of&nbsp;
        <ExternalLink href="https://www.wikiwand.com/en/Catalonia" hasUnderline>
          Catalonia
        </ExternalLink>
        .
      </p>
      <p className="text-sm md:text-base mt-0.5">
        I&apos;m looking forward to the completion of the Sagrada Familia.
      </p>
    </footer>
  );
};

export default Footer;
